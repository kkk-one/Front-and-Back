import React from 'react';
import { FixtureStateUpdater, InputFixtureState, InputsFixtureState } from 'react-cosmos-core';
export type InputSlotProps<T extends InputFixtureState> = {
    inputName: string;
    input: T;
    onFixtureStateChange: (updater: FixtureStateUpdater<InputsFixtureState>) => void;
};
type Props<T extends InputFixtureState> = {
    slotProps: InputSlotProps<T>;
};
export declare function InputSlot<T extends InputFixtureState>({ slotProps, }: Props<T>): React.JSX.Element;
export {};
