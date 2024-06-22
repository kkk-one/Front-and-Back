'use client';
import React from 'react';
import { FixtureModule } from '../fixtureModule/FixtureModule.js';
import { LazyModuleLoader } from '../moduleLoaders/LazyModuleLoader.js';
import { StaticModuleLoader } from '../moduleLoaders/StaticModuleLoader.js';
import { RendererContext } from '../rendererConnect/RendererContext.js';
import { FixtureLoaderConnect } from './FixtureLoaderConnect.js';
import { defaultRenderMessage } from './defaultRenderMessage.js';
export function ClientFixtureLoader({ moduleWrappers, globalDecorators, renderMessage = defaultRenderMessage, }) {
    const { selectedFixture } = React.useContext(RendererContext);
    return (React.createElement(FixtureLoaderConnect, { moduleWrappers: moduleWrappers, selectedFixture: selectedFixture, renderMessage: renderMessage, renderFixture: selected => {
            function renderModules(modules) {
                return (React.createElement(FixtureModule, { ...modules, ...selected, globalDecorators: globalDecorators, lazy: moduleWrappers.lazy, renderMessage: renderMessage }));
            }
            const { fixtureId } = selected;
            return moduleWrappers.lazy ? (React.createElement(LazyModuleLoader, { fixtureWrapper: moduleWrappers.fixtures[fixtureId.path], decorators: moduleWrappers.decorators, fixturePath: fixtureId.path, renderModules: renderModules })) : (React.createElement(StaticModuleLoader, { fixtureWrapper: moduleWrappers.fixtures[fixtureId.path], decorators: moduleWrappers.decorators, fixturePath: fixtureId.path, renderModules: renderModules }));
        } }));
}
