import React from 'react';
import { UserModuleWrappers } from 'react-cosmos-core';
import { SelectedFixture } from './SelectedFixture.js';
type Props = {
    moduleWrappers: UserModuleWrappers;
    selectedFixture: SelectedFixture | null;
    renderMessage: (msg: string) => React.ReactNode;
    renderFixture: (selected: SelectedFixture) => React.ReactNode;
};
export declare function FixtureLoaderConnect({ moduleWrappers, selectedFixture, renderMessage, renderFixture, }: Props): React.JSX.Element;
export {};
