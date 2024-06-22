import React, { useCallback } from 'react';
import { createPlugin } from 'react-plugin';
import { getFixtureExpansion, hasFsValues, updateElementExpansion, } from '../../components/ValueInputTree/index.js';
import { BlankState } from './BlankState.js';
import { PropsPanel } from './PropsPanel/index.js';
import { PROPS_TREE_EXPANSION_STORAGE_KEY, } from './shared.js';
const { namedPlug, register } = createPlugin({
    name: 'propsPanel',
});
namedPlug('sidePanelRow', 'props', ({ pluginContext, slotProps }) => {
    const { fixtureId, getFixtureState, setFixtureState } = slotProps;
    const { fixtureExpansion, onElementExpansionChange } = useFixtureExpansion(pluginContext, fixtureId);
    const fixtureState = getFixtureState('props');
    const onFixtureStateChange = useCallback(change => setFixtureState('props', change), [setFixtureState]);
    return (React.createElement(PropsPanel, { fixtureState: fixtureState, fixtureExpansion: fixtureExpansion, onFixtureStateChange: onFixtureStateChange, onElementExpansionChange: onElementExpansionChange }));
});
// WARNING: This plug has to be aware of all input categories and only show up
// when none is available
namedPlug('sidePanelRow', 'blankState', ({ slotProps }) => {
    const { getFixtureState } = slotProps;
    return shouldShowBlankState(getFixtureState) ? React.createElement(BlankState, null) : null;
});
export { register };
if (process.env.NODE_ENV !== 'test')
    register();
const DEFAULT_TREE_EXPANSION = {};
function useFixtureExpansion(context, fixtureId) {
    const { getMethodsOf } = context;
    const storage = getMethodsOf('storage');
    const propsExpansion = storage.getItem(PROPS_TREE_EXPANSION_STORAGE_KEY) ||
        DEFAULT_TREE_EXPANSION;
    const fixtureExpansion = getFixtureExpansion(propsExpansion, fixtureId);
    const onElementExpansionChange = React.useCallback((elementId, treeExpansion) => {
        storage.setItem(PROPS_TREE_EXPANSION_STORAGE_KEY, updateElementExpansion(propsExpansion, fixtureId, elementId, treeExpansion));
    }, [storage, propsExpansion, fixtureId]);
    return {
        fixtureExpansion,
        onElementExpansionChange,
    };
}
function shouldShowBlankState(getFixtureState) {
    const props = getFixtureState('props');
    const hasProps = props && props.some(hasFsValues);
    if (hasProps)
        return false;
    const classState = getFixtureState('classState');
    const hasClassState = classState && classState.some(hasFsValues);
    if (hasClassState)
        return false;
    const inputs = getFixtureState('inputs');
    const hasInputs = inputs && Object.keys(inputs).length > 0;
    if (hasInputs)
        return false;
    return true;
}
