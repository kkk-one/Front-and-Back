import React from 'react';
import { createRendererUrl } from 'react-cosmos-core';
import { IconButton32 } from '../../../components/buttons/index.js';
import { CastIcon } from '../../../components/icons/index.js';
import { copyToClipboard } from './copyToClipboard.js';
export function RemoteButton({ devServerOn, rendererUrl, pushNotification, }) {
    if (!devServerOn || !rendererUrl) {
        return null;
    }
    return (React.createElement(IconButton32, { icon: React.createElement(CastIcon, null), title: "Copy remote renderer URL", onClick: () => copyRendererUrlToClipboard(createRendererUrl(rendererUrl)) }));
    async function copyRendererUrlToClipboard(url) {
        const fullUrl = getFullUrl(url);
        try {
            await copyToClipboard(fullUrl);
            pushNotification({
                id: 'renderer-url-copy',
                type: 'success',
                title: `Renderer URL copied to clipboard`,
                info: 'Paste the renderer URL in the address bar of another browser.',
            });
        }
        catch (err) {
            pushNotification({
                id: 'renderer-url-copy',
                type: 'error',
                title: `Failed to copy renderer URL to clipboard`,
                info: 'Make sure your browser supports clipboard operations.',
            });
        }
    }
}
function getFullUrl(rendererUrl) {
    // Renderer URL can be absolute or relative, depending on whether the renderer
    // is running on the same host/port as the playground
    if (rendererUrl.startsWith('http'))
        return rendererUrl;
    return new URL(rendererUrl, location.origin).toString();
}
