import React from 'react';
import { FixtureStateValues } from 'react-cosmos-core';
import { TreeExpansion } from '../../shared/treeExpansion.js';
type Props = {
    values: FixtureStateValues;
    expansion: TreeExpansion;
    setExpansion: (treeExpansion: TreeExpansion) => unknown;
};
export declare function ExpandCollapseValues({ values, expansion, setExpansion, }: Props): React.JSX.Element | null;
export {};
