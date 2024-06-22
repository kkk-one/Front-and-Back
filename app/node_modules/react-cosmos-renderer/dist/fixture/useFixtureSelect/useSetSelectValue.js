import { useCallback } from 'react';
import { useFixtureState } from '../useFixtureState.js';
export function useSetSelectValue(selectName) {
    const [, setFixtureState] = useFixtureState('inputs');
    return useCallback(value => {
        setFixtureState(prevFs => {
            const inputFs = prevFs && prevFs[selectName];
            if (!inputFs || inputFs.type !== 'select') {
                console.warn(`Invalid fixture state for select: ${selectName}`);
                return prevFs ?? {};
            }
            return {
                ...prevFs,
                [selectName]: {
                    ...inputFs,
                    currentValue: value,
                },
            };
        });
    }, [selectName, setFixtureState]);
}
