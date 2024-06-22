import { useFixtureInput } from './useFixtureInput.js';
// NOTE: This is an alias for useFixtureInput kept for backwards compatibility
// with Cosmos versions older than 6.1
export function useValue(inputName, opts) {
    return useFixtureInput(inputName, opts.defaultValue);
}
