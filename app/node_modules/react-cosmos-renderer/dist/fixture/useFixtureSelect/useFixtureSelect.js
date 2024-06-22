import { useCurrentSelectValue } from './useCurrentSelectValue.js';
import { useSelectFixtureState } from './useSelectFixtureState.js';
import { useSetSelectValue } from './useSetSelectValue.js';
export function useFixtureSelect(selectName, args) {
    if (!args || !args.options || !args.options.length)
        throw new Error('No options provided to useSelect');
    if (typeof args.options[0] === 'object') {
        if (!args.options[0].options.length)
            throw new Error('No options provided to useSelect');
    }
    useSelectFixtureState(selectName, args);
    const currentValue = useCurrentSelectValue(selectName, args);
    const setValue = useSetSelectValue(selectName);
    return [currentValue, setValue];
}
