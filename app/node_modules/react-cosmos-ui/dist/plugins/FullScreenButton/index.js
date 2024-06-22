import React from 'react';
import { createRendererUrl } from 'react-cosmos-core';
import { createPlugin } from 'react-plugin';
import { FullScreenButton } from './FullScreenButton.js';
const { namedPlug, register } = createPlugin({
    name: 'fullScreenButton',
});
namedPlug('rendererAction', 'fullScreen', ({ pluginContext, slotProps }) => {
    const { getMethodsOf } = pluginContext;
    const { fixtureId } = slotProps;
    const core = getMethodsOf('core');
    const rendererCore = getMethodsOf('rendererCore');
    const rendererUrl = rendererCore.getRendererUrl();
    const onSelect = React.useCallback(() => {
        if (rendererUrl) {
            const fixtureUrl = createRendererUrl(rendererUrl, fixtureId, true);
            // noopener is required to prevent reuse of sessionStorage from the
            // Playground window, thus making sure the remote renderer will generate
            // a different rendererId from the iframe renderer.
            // https://stackoverflow.com/a/73821739
            window.open(fixtureUrl, '_blank', 'noopener=true');
        }
    }, [fixtureId, rendererUrl]);
    React.useEffect(() => {
        return core.registerCommands({ goFullScreen: onSelect });
    }, [core, onSelect]);
    return rendererUrl ? React.createElement(FullScreenButton, { onClick: onSelect }) : null;
});
export { register };
if (process.env.NODE_ENV !== 'test')
    register();
