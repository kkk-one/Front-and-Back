import React from 'react';
import { FixtureModules, UserModuleWrappers } from 'react-cosmos-core';
type Props = {
    moduleWrappers: UserModuleWrappers;
    fixturePath: string;
    renderModules: (modules: FixtureModules) => React.ReactElement;
};
export declare function AsyncModuleLoader({ moduleWrappers, fixturePath, renderModules, }: Props): Promise<React.ReactElement<any, string | React.JSXElementConstructor<any>>>;
export {};
