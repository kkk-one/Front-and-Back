import React from 'react';
import { FixtureId, FlatFixtureTreeItem } from 'react-cosmos-core';
type Props = {
    active: boolean;
    cleanFixturePath: string;
    fixtureItem: FlatFixtureTreeItem;
    onSelect: (fixtureId: FixtureId, revealFixture: boolean) => unknown;
};
export declare function FixtureSearchResult({ active, cleanFixturePath, fixtureItem, onSelect, }: Props): React.JSX.Element;
export {};
