import React from 'react';
import { createRoot } from 'react-dom/client';
import { DomFixtureLoader } from './DomFixtureLoader.js';
import { getDomContainer } from './getDomContainer.js';
let cachedRoot = null;
export function mountDomRenderer({ rendererConfig, moduleWrappers }) {
    const domContainer = getDomContainer(rendererConfig.containerQuerySelector);
    if (!cachedRoot || cachedRoot.domContainer !== domContainer) {
        const reactRoot = createRoot(domContainer);
        cachedRoot = { domContainer, reactRoot };
    }
    cachedRoot.reactRoot.render(React.createElement(DomFixtureLoader, { rendererConfig: rendererConfig, moduleWrappers: moduleWrappers }));
}
