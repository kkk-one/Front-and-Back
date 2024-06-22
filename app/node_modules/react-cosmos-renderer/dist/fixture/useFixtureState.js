import { useCallback, useContext } from 'react';
import { fixtureStateByName, updateFixtureState, } from 'react-cosmos-core';
import { FixtureContext } from './FixtureContext.js';
export function useFixtureState(name) {
    const { fixtureState, setFixtureState } = useContext(FixtureContext);
    return [
        fixtureStateByName(fixtureState, name),
        useCallback((change) => {
            setFixtureState(prevFs => updateFixtureState(prevFs, name, change));
        }, [name, setFixtureState]),
    ];
}
