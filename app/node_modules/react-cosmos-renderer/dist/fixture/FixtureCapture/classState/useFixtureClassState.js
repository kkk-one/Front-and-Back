import { isEqual } from 'lodash-es';
import { useEffect, useRef, } from 'react';
import { createClassStateFixtureStateItem, createValues, extendWithValues, filterClassStateFixtureState, findClassStateFixtureStateItem, getComponentName, removeClassStateFixtureStateItem, } from 'react-cosmos-core';
import { useFixtureState } from '../../useFixtureState.js';
import { findRelevantElementPaths } from '../shared/findRelevantElementPaths.js';
import { decorateFixtureRefs } from './decorateFixtureRefs/index.js';
import { replaceState, } from './shared.js';
export function useFixtureClassState(fixture, decoratorId, elRefs) {
    const elPaths = findRelevantElementPaths(fixture);
    const [classStateFs, setClassStateFs] = useFixtureState('classState');
    const lastFsRef = useFixtureStateRef(classStateFs);
    // Keep a copy of the previous fixture state to observe changes
    const prevFsRef = useRef(classStateFs);
    // Remember initial state of child components to use as a default when
    // resetting fixture state
    const initialStates = useRef({});
    // Ref handlers are reused because every time we pass a new ref handler to
    // a React element it gets called in the next render loop, even when the
    // associated element instance has been preserved. Having ref handlers fire
    // on every render loop results in unwanted operations and race conditions.
    const cachedRefHandlers = useRef({});
    useEffect(() => {
        return () => {
            initialStates.current = {};
            cachedRefHandlers.current = {};
        };
    }, []);
    useEffect(() => {
        // Remove fixture state for removed child elements (likely via HMR)
        // FIXME: Also invalidate fixture state at this element path if the
        // component type of the corresponding element changed
        const decoratorFs = filterClassStateFixtureState(classStateFs, decoratorId);
        decoratorFs.forEach(({ elementId }) => {
            const { elPath } = elementId;
            if (elPaths.indexOf(elementId.elPath) === -1) {
                setClassStateFs(prevFs => removeClassStateFixtureStateItem(prevFs, elementId));
                if (elRefs.current[elPath]) {
                    delete elRefs.current[elPath];
                    delete initialStates.current[elPath];
                    delete cachedRefHandlers.current[elPath];
                }
            }
        });
        elPaths.forEach(elPath => {
            const elementId = { decoratorId, elPath };
            // Component fixture state can be provided before the fixture mounts (eg.
            // a previous snapshot of a fixture state or the current fixture state
            // from another renderer)
            const fsItem = findClassStateFixtureStateItem(classStateFs, elementId);
            if (!fsItem) {
                if (initialStates.current[elPath]) {
                    const { state } = initialStates.current[elPath];
                    const elRef = elRefs.current[elPath];
                    if (!isEqual(elRef.state, state)) {
                        replaceState(elRef, state);
                    }
                    setClassStateFs(prevFs => createClassStateFixtureStateItem({
                        classStateFs: prevFs,
                        elementId,
                        values: createValues(state),
                        componentName: getComponentName(elRef.constructor),
                    }));
                }
            }
            else {
                const elRef = elRefs.current[elPath];
                // The el ref can be missing for three reasons:
                //   1. Element type is stateless
                //   2. Element type is a class, but doesn't have state. An instance exists
                //      but has been discarded because of its lack of state.
                //   3. Element instance unmounted and is about to remount. When this
                //      happens, the new instance will be handled when its ref fires again.
                if (!elRef) {
                    return;
                }
                // The child's state can be out of sync with the fixture state for two
                // reasons:
                //   1. The child's state changed internally
                //   2. The fixture state changed
                // Here we're interested in the second scenario. In the first scenario
                // we want to let the component state override the fixture state.
                const prevFsItem = findClassStateFixtureStateItem(prevFsRef.current, elementId);
                if (prevFsItem && !isEqual(prevFsItem, fsItem)) {
                    return replaceState(elRef, extendWithValues(elRef.state, fsItem.values));
                }
            }
        });
    }, [classStateFs, decoratorId, elPaths, elRefs, setClassStateFs]);
    // Update prev fixture state ref *after* running effects that reference it
    useEffect(() => {
        prevFsRef.current = classStateFs;
    });
    return decorateFixtureRefs(fixture, handleRef, cachedRefHandlers.current);
    function handleRef(elPath, elRef) {
        if (!elRef) {
            delete elRefs.current[elPath];
            return;
        }
        // Only track instances with state
        const { state } = elRef;
        if (!state) {
            return;
        }
        elRefs.current[elPath] = elRef;
        setInitialState(initialStates.current, elPath, elRef);
        const elementId = { decoratorId, elPath };
        const fsClassState = findClassStateFixtureStateItem(lastFsRef.current, elementId);
        if (!fsClassState) {
            setClassStateFs(prevFs => createClassStateFixtureStateItem({
                classStateFs: prevFs,
                elementId,
                values: createValues(state),
                componentName: getComponentName(elRef.constructor),
            }));
        }
        else {
            replaceState(elRef, extendWithValues(state, fsClassState.values));
        }
    }
}
// Make latest fixture state accessible in ref callback
function useFixtureStateRef(classStateFs) {
    const ref = useRef(classStateFs);
    useEffect(() => {
        ref.current = classStateFs;
    });
    return ref;
}
function setInitialState(initialStates, elPath, elRef) {
    const found = initialStates[elPath];
    const type = elRef.constructor;
    // Keep the first state recevied for this type
    const initialStateExists = found && found.type === type;
    if (!initialStateExists && elRef.state) {
        initialStates[elPath] = { type, state: elRef.state };
    }
}
