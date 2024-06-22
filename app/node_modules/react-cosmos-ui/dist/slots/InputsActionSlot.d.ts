import React from 'react';
import { InputsFixtureState } from 'react-cosmos-core';
export type InputsActionSlotProps = {
    inputs: InputsFixtureState;
};
type Props = {
    slotProps: InputsActionSlotProps;
    plugOrder: string[];
};
export declare function InputsActionSlot({ slotProps, plugOrder }: Props): React.JSX.Element;
export {};
