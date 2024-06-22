import React from 'react';
import { createValue, extendWithValue, } from 'react-cosmos-core';
import { useFixtureState } from '../useFixtureState.js';
export function useSetInputValue(inputName, defaultValue) {
    const [, setFixtureState] = useFixtureState('inputs');
    return React.useCallback(stateChange => {
        setFixtureState(prevFs => {
            // Types of fixture state values cannot be guaranteed at run
            // time, which means that tampering with the fixture state can
            // cause runtime errors
            function getNewState() {
                if (typeof stateChange !== 'function')
                    return stateChange;
                const stateUpdater = stateChange;
                return stateUpdater(getCurrentValueFromFixtureState(prevFs, inputName, defaultValue));
            }
            return {
                ...prevFs,
                [inputName]: {
                    type: 'standard',
                    defaultValue: createValue(defaultValue),
                    currentValue: createValue(getNewState()),
                },
            };
        });
    }, [setFixtureState, defaultValue, inputName]);
}
function getCurrentValueFromFixtureState(fixtureState, inputName, defaultValue) {
    const inputFs = fixtureState && fixtureState[inputName];
    return inputFs && inputFs.type === 'standard'
        ? extendWithValue(defaultValue, inputFs.currentValue)
        : defaultValue;
}
