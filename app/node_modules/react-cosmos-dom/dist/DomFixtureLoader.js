import React from 'react';
import { ClientFixtureLoader } from 'react-cosmos-renderer/client';
import { DomRendererProvider } from './DomRendererProvider.js';
import { ErrorCatch } from './ErrorCatch.js';
export function DomFixtureLoader({ rendererConfig, moduleWrappers }) {
    return (React.createElement(DomRendererProvider, { rendererConfig: rendererConfig },
        React.createElement(ClientFixtureLoader, { moduleWrappers: moduleWrappers, globalDecorators: globalDecorators, renderMessage: renderMessage })));
}
const globalDecorators = [ErrorCatch];
const containerStyle = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: '-apple-system, BlinkMacSystemFont, Ubuntu, "Helvetica Neue", Helvetica, sans-serif',
    fontSize: 14,
};
function renderMessage(msg) {
    return React.createElement("div", { style: containerStyle }, msg);
}
