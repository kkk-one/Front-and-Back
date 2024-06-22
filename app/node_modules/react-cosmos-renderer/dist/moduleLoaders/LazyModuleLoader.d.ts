import React from 'react';
import { ByPath, FixtureModules, LazyReactDecoratorWrapper, LazyReactFixtureWrapper } from 'react-cosmos-core';
type Props = {
    fixtureWrapper: LazyReactFixtureWrapper;
    decorators: ByPath<LazyReactDecoratorWrapper>;
    fixturePath: string;
    renderModules: (modules: FixtureModules) => React.ReactElement;
};
export declare function LazyModuleLoader({ fixtureWrapper, decorators, fixturePath, renderModules, }: Props): React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
export {};
