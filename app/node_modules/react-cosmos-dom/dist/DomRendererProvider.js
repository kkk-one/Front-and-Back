'use client';
import React from 'react';
import { parseRendererQueryString } from 'react-cosmos-core';
import { StatefulRendererProvider } from 'react-cosmos-renderer/client';
import { GlobalErrorHandler } from './GlobalErrorHandler.js';
import { reloadDomRenderer } from './reloadDomRenderer.js';
import { useDomRendererConnect } from './useDomRendererConnect.js';
import { useDomRendererId } from './useDomRendererId.js';
export function DomRendererProvider({ children, rendererConfig }) {
    const rendererId = useDomRendererId();
    const rendererConnect = useDomRendererConnect(rendererConfig.playgroundUrl);
    const { locked = false, fixtureId = null } = React.useMemo(() => parseRendererQueryString(location.search), []);
    return (React.createElement(StatefulRendererProvider, { rendererId: rendererId, rendererConnect: rendererConnect, locked: locked, selectedFixtureId: fixtureId, reloadRenderer: reloadDomRenderer },
        children,
        typeof window !== 'undefined' && React.createElement(GlobalErrorHandler, null)));
}
