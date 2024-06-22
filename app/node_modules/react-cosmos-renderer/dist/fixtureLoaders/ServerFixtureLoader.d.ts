import React from 'react';
import { ReactDecorator, UserModuleWrappers } from 'react-cosmos-core';
import { SelectedFixture } from './SelectedFixture.js';
type Props = {
    moduleWrappers: UserModuleWrappers;
    globalDecorators?: ReactDecorator[];
    renderMessage?: (msg: string) => React.ReactNode;
    selectedFixture: SelectedFixture | null;
};
export declare function ServerFixtureLoader({ moduleWrappers, globalDecorators, renderMessage, selectedFixture, }: Props): React.JSX.Element;
export {};
