import React from 'react';
import { Slot } from 'react-plugin';
export function InputSlot({ slotProps, }) {
    return React.createElement(Slot, { name: `input-${slotProps.input.type}`, slotProps: slotProps });
}
