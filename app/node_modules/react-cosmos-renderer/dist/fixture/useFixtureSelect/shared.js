export function getDefaultSelectValue({ options, defaultValue, }) {
    if (typeof defaultValue === 'string') {
        return defaultValue;
    }
    const [firstOption] = options;
    if (typeof firstOption === 'object') {
        return firstOption.options[0];
    }
    return firstOption;
}
