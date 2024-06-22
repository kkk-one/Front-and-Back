import { useCurrentInputValue } from './useCurrentInputValue.js';
import { useInputFixtureState } from './useInputFixtureState.js';
import { useSetInputValue } from './useSetInputValue.js';
export function useFixtureInput(inputName, defaultValue) {
    useInputFixtureState(inputName, defaultValue);
    const currentValue = useCurrentInputValue(inputName, defaultValue);
    const setValue = useSetInputValue(inputName, defaultValue);
    return [currentValue, setValue];
}
