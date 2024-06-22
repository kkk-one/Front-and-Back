import React from 'react';
import { FlatFixtureTreeItem } from 'react-cosmos-core';
export type FixtureActionSlotProps = {
    fixtureItem: FlatFixtureTreeItem;
};
type Props = {
    slotProps: FixtureActionSlotProps;
    plugOrder: string[];
};
export declare function FixtureActionSlot({ slotProps, plugOrder }: Props): React.JSX.Element;
export {};
