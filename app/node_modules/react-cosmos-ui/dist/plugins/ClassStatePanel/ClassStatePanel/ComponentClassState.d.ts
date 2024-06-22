import React from 'react';
import { ClassStateFixtureStateItem } from 'react-cosmos-core';
import { FixtureExpansion, OnElementExpansionChange } from '../../../components/ValueInputTree/index.js';
import { SetClassStateFixtureState } from '../shared.js';
type Props = {
    classStateFsItem: ClassStateFixtureStateItem;
    fixtureExpansion: FixtureExpansion;
    onFixtureStateChange: SetClassStateFixtureState;
    onElementExpansionChange: OnElementExpansionChange;
};
export declare function ComponentClassState({ classStateFsItem, fixtureExpansion, onFixtureStateChange, onElementExpansionChange, }: Props): React.JSX.Element;
export {};
