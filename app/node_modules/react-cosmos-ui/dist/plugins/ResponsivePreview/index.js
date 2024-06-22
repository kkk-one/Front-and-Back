import React from 'react';
import { createPlugin } from 'react-plugin';
import { ResponsivePreview } from './ResponsivePreview/ResponsivePreview.js';
import { ToggleButton } from './ToggleButton/index.js';
import { DEFAULT_DEVICES, DEFAULT_VIEWPORT_STATE, VIEWPORT_STORAGE_KEY, } from './shared.js';
const { plug, namedPlug, register } = createPlugin({
    name: 'responsivePreview',
    defaultConfig: {
        devices: DEFAULT_DEVICES,
    },
});
plug('rendererPreviewOuter', ({ children, pluginContext }) => {
    const { getConfig } = pluginContext;
    const { devices } = getConfig();
    const { enabled, viewport, scaled } = getViewportState(pluginContext);
    const onViewportChange = useViewportChange(pluginContext);
    const onScaledChange = useScaledChange(pluginContext);
    return (React.createElement(ResponsivePreview, { devices: devices, enabled: enabled, viewport: viewport, scaled: scaled, setViewport: onViewportChange, setScaled: onScaledChange }, children));
});
namedPlug('rendererAction', 'responsivePreview', ({ pluginContext }) => {
    const { getMethodsOf } = pluginContext;
    const rendererCore = getMethodsOf('rendererCore');
    const viewportState = getViewportState(pluginContext);
    const { enabled, viewport } = viewportState;
    if (!rendererCore.getRendererUrl())
        return null;
    return (React.createElement(ToggleButton, { selected: enabled, onToggle: () => {
            if (enabled) {
                setViewportState(pluginContext, { ...viewportState, enabled: false });
                setViewportFixtureState(pluginContext, null);
            }
            else {
                setViewportState(pluginContext, { ...viewportState, enabled: true });
                setViewportFixtureState(pluginContext, viewport);
            }
        } }));
});
export { register };
if (process.env.NODE_ENV !== 'test')
    register();
function useViewportChange(context) {
    const viewportState = getViewportState(context);
    return React.useCallback((change) => {
        const viewport = typeof change === 'function' ? change(viewportState.viewport) : change;
        setViewportState(context, { ...viewportState, enabled: true, viewport });
        setViewportFixtureState(context, viewport);
    }, [context, viewportState]);
}
function useScaledChange(context) {
    const viewportState = getViewportState(context);
    return React.useCallback((scaled) => setViewportState(context, { ...viewportState, scaled }), [context, viewportState]);
}
function getViewportState(context) {
    const { getMethodsOf } = context;
    const storage = getMethodsOf('storage');
    const viewportState = storage.getItem(VIEWPORT_STORAGE_KEY) ||
        DEFAULT_VIEWPORT_STATE;
    const rendererCore = getMethodsOf('rendererCore');
    const viewport = rendererCore.getFixtureState('viewport');
    return viewport
        ? { ...viewportState, enabled: true, viewport }
        : viewportState;
}
function setViewportState(context, viewportState) {
    const { getMethodsOf } = context;
    const storage = getMethodsOf('storage');
    storage.setItem(VIEWPORT_STORAGE_KEY, viewportState);
}
function setViewportFixtureState(context, viewport) {
    const { getMethodsOf } = context;
    const rendererCore = getMethodsOf('rendererCore');
    rendererCore.setFixtureState('viewport', viewport);
}
