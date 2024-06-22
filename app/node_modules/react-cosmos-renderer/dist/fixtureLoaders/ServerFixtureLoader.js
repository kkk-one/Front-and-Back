// https://github.com/DefinitelyTyped/DefinitelyTyped/pull/65220
/// <reference types="react/experimental" />
import React, { Suspense } from 'react';
import { FixtureModule } from '../fixtureModule/FixtureModule.js';
import { AsyncModuleLoader } from '../moduleLoaders/AsyncModuleLoader.js';
import { FixtureLoaderConnect } from './FixtureLoaderConnect.js';
import { defaultRenderMessage } from './defaultRenderMessage.js';
export function ServerFixtureLoader({ moduleWrappers, globalDecorators, renderMessage = defaultRenderMessage, selectedFixture, }) {
    return (React.createElement(FixtureLoaderConnect, { moduleWrappers: moduleWrappers, selectedFixture: selectedFixture, renderMessage: renderMessage, renderFixture: selected => (
        // The suspense boundary allows the rendererReady response to be sent
        // before loading the fixture modules.
        React.createElement(Suspense, null,
            React.createElement(AsyncModuleLoader, { moduleWrappers: moduleWrappers, fixturePath: selected.fixtureId.path, renderModules: modules => (React.createElement(FixtureModule, { ...modules, ...selected, globalDecorators: globalDecorators, lazy: moduleWrappers.lazy, renderMessage: renderMessage })) }))) }));
}
