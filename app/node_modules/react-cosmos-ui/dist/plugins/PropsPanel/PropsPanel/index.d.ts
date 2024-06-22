import React from 'react';
import { PropsFixtureState } from 'react-cosmos-core';
import { FixtureExpansion, OnElementExpansionChange } from '../../../components/ValueInputTree/index.js';
import { SetPropsFixtureState } from '../shared.js';
type Props = {
    fixtureState: PropsFixtureState | undefined;
    fixtureExpansion: FixtureExpansion;
    onFixtureStateChange: SetPropsFixtureState;
    onElementExpansionChange: OnElementExpansionChange;
};
export declare const PropsPanel: React.NamedExoticComponent<Props>;
export {};
