import { isEqual } from 'lodash-es';
import React from 'react';
import { SidePanelActions, SidePanelBody, SidePanelContainer, SidePanelHeader, SidePanelTitle, } from '../../components/SidePanel.js';
import { IconButton32 } from '../../components/buttons/index.js';
import { RotateCcwIcon } from '../../components/icons/index.js';
import { InputSlot } from '../../slots/InputSlot.js';
import { InputsActionSlot } from '../../slots/InputsActionSlot.js';
export function InputsPanel({ fixtureState, actionOrder, onFixtureStateChange, }) {
    const handleInputsReset = React.useCallback(() => onFixtureStateChange(resetInputs), [onFixtureStateChange]);
    const inputs = fixtureState ?? {};
    if (Object.keys(inputs).length === 0)
        return null;
    return (React.createElement(SidePanelContainer, null,
        React.createElement(SidePanelHeader, null,
            React.createElement(SidePanelTitle, { label: "Inputs" }),
            React.createElement(SidePanelActions, null,
                React.createElement(IconButton32, { title: "Reset to default values", icon: React.createElement(RotateCcwIcon, null), disabled: areInputsUnchanged(inputs), onClick: handleInputsReset }),
                React.createElement(InputsActionSlot, { slotProps: { inputs }, plugOrder: actionOrder }))),
        React.createElement(SidePanelBody, null, Object.keys(inputs).map(inputName => (React.createElement(InputSlot, { key: inputName, slotProps: {
                inputName,
                input: inputs[inputName],
                onFixtureStateChange,
            } }))))));
}
function areInputsUnchanged(inputs) {
    return Object.keys(inputs).every(inputName => isEqual(inputs[inputName].currentValue, inputs[inputName].defaultValue));
}
function resetInputs(fixtureState) {
    const inputs = fixtureState ? { ...fixtureState } : {};
    Object.keys(inputs).forEach(inputName => {
        inputs[inputName] = resetInput(inputs[inputName]);
    });
    return inputs;
}
function resetInput(input) {
    return { ...input, currentValue: input.defaultValue };
}
