import React from 'react';
import { InputsFixtureState } from 'react-cosmos-core';
import { SetInputsFixtureState } from './shared.js';
type Props = {
    fixtureState: InputsFixtureState | undefined;
    actionOrder: string[];
    onFixtureStateChange: SetInputsFixtureState;
};
export declare function InputsPanel({ fixtureState, actionOrder, onFixtureStateChange, }: Props): React.JSX.Element | null;
export {};
