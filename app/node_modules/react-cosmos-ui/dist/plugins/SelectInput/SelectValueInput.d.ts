import React from 'react';
import { SelectInputFixtureState } from 'react-cosmos-core';
type Props = {
    name: string;
    input: SelectInputFixtureState;
    onChange: (name: string, select: SelectInputFixtureState) => unknown;
};
export declare function SelectValueInput({ name, input, onChange }: Props): React.JSX.Element;
export {};
