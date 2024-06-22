import React from 'react';
import { PropsFixtureStateItem } from 'react-cosmos-core';
import { FixtureExpansion, OnElementExpansionChange } from '../../../components/ValueInputTree/index.js';
import { SetPropsFixtureState } from '../shared.js';
type Props = {
    propsFsItem: PropsFixtureStateItem;
    fixtureExpansion: FixtureExpansion;
    onFixtureStateChange: SetPropsFixtureState;
    onElementExpansionChange: OnElementExpansionChange;
};
export declare function ComponentProps({ propsFsItem, fixtureExpansion, onFixtureStateChange, onElementExpansionChange, }: Props): React.JSX.Element;
export {};
