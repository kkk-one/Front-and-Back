import React from 'react';
import { ByPath, FixtureModules, ReactDecoratorWrapper, ReactFixtureWrapper } from 'react-cosmos-core';
type Props = {
    fixtureWrapper: ReactFixtureWrapper;
    decorators: ByPath<ReactDecoratorWrapper>;
    fixturePath: string;
    renderModules: (modules: FixtureModules) => React.ReactElement;
};
export declare function StaticModuleLoader({ fixtureWrapper, decorators, fixturePath, renderModules, }: Props): React.ReactElement<any, string | React.JSXElementConstructor<any>>;
export {};
