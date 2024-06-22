import { LazyReactDecoratorWrapper, LazyReactFixtureWrapper } from 'react-cosmos-core';
export declare function importLazyFixtureModules(fixtureWrapper: LazyReactFixtureWrapper, decoratorWrappers: LazyReactDecoratorWrapper[]): Promise<{
    fixtureModule: import("react-cosmos-core").ReactFixtureModule;
    decoratorModules: import("react-cosmos-core").ReactDecoratorModule[];
}>;
