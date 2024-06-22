import { useFixtureSelect } from './useFixtureSelect.js';
// NOTE: This is an alias for useFixtureSelect kept for backwards compatibility
// with Cosmos versions older than 6.1
export function useSelect(selectName, args) {
    return useFixtureSelect(selectName, args);
}
