import React from 'react';
import { ClassStateFixtureState } from 'react-cosmos-core';
import { FixtureExpansion, OnElementExpansionChange } from '../../../components/ValueInputTree/index.js';
import { SetClassStateFixtureState } from '../shared.js';
type Props = {
    fixtureState: ClassStateFixtureState | undefined;
    fixtureExpansion: FixtureExpansion;
    onFixtureStateChange: SetClassStateFixtureState;
    onElementExpansionChange: OnElementExpansionChange;
};
export declare const ClassStatePanel: React.NamedExoticComponent<Props>;
export {};
