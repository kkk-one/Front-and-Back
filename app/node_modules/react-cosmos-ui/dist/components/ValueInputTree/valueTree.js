export function createValueTree(values, isArray = false) {
    const children = {};
    Object.keys(values).forEach(key => {
        const value = values[key];
        if (value.type === 'object') {
            children[key] = createValueTree(value.values, false);
        }
        else if (value.type === 'array') {
            const objValues = {};
            value.values.forEach((v, idx) => {
                objValues[idx] = v;
            });
            children[key] = createValueTree(objValues, true);
        }
        else {
            children[key] = {
                data: { type: 'item', value },
            };
        }
    });
    return {
        data: { type: 'collection', isArray },
        children,
    };
}
