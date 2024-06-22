import React, { useCallback, useMemo } from 'react';
import { createPlugin } from 'react-plugin';
import { ExpandCollapseValues } from '../../components/ValueInputTree/ExpandCollapseValues.js';
import { ValueInputTree } from '../../components/ValueInputTree/index.js';
import { useTreeExpansionStorage } from './storage.js';
const { namedPlug, plug, register } = createPlugin({
    name: 'standardInput',
});
plug('input-standard', ({ pluginContext, slotProps }) => {
    const { inputName, input, onFixtureStateChange } = slotProps;
    const treeExpansionApi = useTreeExpansionStorage(pluginContext);
    const values = useMemo(() => ({ [inputName]: input.currentValue }), [input.currentValue, inputName]);
    const handleValueChange = useCallback((updatedValues) => {
        onFixtureStateChange(fixtureState => ({
            ...fixtureState,
            [inputName]: {
                ...input,
                currentValue: updatedValues[inputName],
            },
        }));
    }, [input, inputName, onFixtureStateChange]);
    return (React.createElement(ValueInputTree, { id: `input-${inputName}`, values: values, onValueChange: handleValueChange, ...treeExpansionApi }));
});
namedPlug('inputsAction', 'expandCollapse', ({ pluginContext, slotProps }) => {
    const { inputs } = slotProps;
    const treeExpansionApi = useTreeExpansionStorage(pluginContext);
    return (React.createElement(ExpandCollapseValues, { values: extractValuesFromStandardInputs(inputs), ...treeExpansionApi }));
});
function extractValuesFromStandardInputs(inputs) {
    const values = {};
    Object.keys(inputs).forEach(inputName => {
        const input = inputs[inputName];
        if (input.type === 'standard')
            values[inputName] = input.currentValue;
    });
    return values;
}
export { register };
if (process.env.NODE_ENV !== 'test')
    register();
