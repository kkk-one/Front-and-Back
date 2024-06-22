import { useFixtureState } from '../useFixtureState.js';
import { getDefaultSelectValue } from './shared.js';
export function useCurrentSelectValue(selectName, args) {
    const [fixtureState] = useFixtureState('inputs');
    const inputFs = fixtureState && fixtureState[selectName];
    return inputFs && inputFs.type === 'select'
        ? inputFs.currentValue
        : getDefaultSelectValue(args);
}
