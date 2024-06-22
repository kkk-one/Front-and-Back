export function isGroupedOptions(options) {
    const [firstOption] = options;
    if (!firstOption) {
        return false;
    }
    if (typeof firstOption !== 'object') {
        return false;
    }
    return 'group' in firstOption;
}
