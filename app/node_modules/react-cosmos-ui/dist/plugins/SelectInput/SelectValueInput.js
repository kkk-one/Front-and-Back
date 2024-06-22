import React from 'react';
import { Label, ValueDataContainer, ValueInputContainer, } from '../../components/ValueInputTree/ValueInput/shared.js';
import { Select } from '../../components/inputs/Select.js';
import { isGroupedOptions } from '../../shared/groupedOptions.js';
import { lightBlue } from '../../style/colors.js';
export function SelectValueInput({ name, input, onChange }) {
    const { options, currentValue } = input;
    const id = `select-${name}`;
    return (React.createElement(ValueInputContainer, { key: name },
        React.createElement(Label, { title: name, htmlFor: id }, name),
        React.createElement(ValueDataContainer, null,
            React.createElement(Select, { id: id, options: createSelectOptions(options), value: currentValue, color: lightBlue, height: 24, padding: 5, onChange: newValue => onChange(name, {
                    ...input,
                    currentValue: newValue.value,
                }) }))));
}
function createSelectOptions(options) {
    if (isGroupedOptions(options)) {
        return options.map(group => ({
            group: group.group,
            options: group.options.map(option => ({
                value: option,
                label: option,
            })),
        }));
    }
    return options.map(option => ({ value: option, label: option }));
}
