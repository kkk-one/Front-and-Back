import React from 'react';
import { ArraySlot } from 'react-plugin';
export function InputsActionSlot({ slotProps, plugOrder }) {
    return (React.createElement(ArraySlot, { name: "inputsAction", slotProps: slotProps, plugOrder: plugOrder }));
}
