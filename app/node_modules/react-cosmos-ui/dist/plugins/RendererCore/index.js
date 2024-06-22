import { fixtureStateByName } from 'react-cosmos-core';
import { createPlugin } from 'react-plugin';
import { onRouterFixtureReselect } from './onRouterFixtureReselect.js';
import { onRouterFixtureSelect } from './onRouterFixtureSelect.js';
import { onRouterFixtureUnselect } from './onRouterFixtureUnselect.js';
import { receiveResponse } from './receiveResponse/index.js';
import { reloadRenderer } from './reloadRenderer.js';
import { setFixtureState } from './setFixtureState.js';
import { setGlobalFixtureState } from './setGlobalFixtureState.js';
const { on, register, onLoad } = createPlugin({
    name: 'rendererCore',
    defaultConfig: {
        fixtures: {},
        rendererUrl: null,
    },
    initialState: {
        connectedRendererIds: [],
        primaryRendererId: null,
        fixtures: {},
        fixtureState: {},
        globalFixtureState: {},
    },
    methods: {
        getRendererUrl,
        getConnectedRendererIds,
        getPrimaryRendererId,
        getFixtures,
        isRendererConnected,
        reloadRenderer,
        selectPrimaryRenderer,
        receiveResponse,
        getAllFixtureState,
        getFixtureState,
        setFixtureState,
        setGlobalFixtureState,
    },
});
onLoad(({ getConfig, setState }) => {
    const { fixtures } = getConfig();
    setState(prevState => ({ ...prevState, fixtures }));
});
onLoad(context => {
    const core = context.getMethodsOf('core');
    return core.registerCommands({
        reloadRenderer: () => reloadRenderer(context),
    });
});
on('router', {
    fixtureSelect: onRouterFixtureSelect,
    fixtureReselect: onRouterFixtureReselect,
    fixtureUnselect: onRouterFixtureUnselect,
});
export { register };
if (process.env.NODE_ENV !== 'test')
    register();
function getRendererUrl({ getConfig }) {
    return getConfig().rendererUrl;
}
function getConnectedRendererIds({ getState }) {
    return getState().connectedRendererIds;
}
function getPrimaryRendererId({ getState }) {
    return getState().primaryRendererId;
}
function getFixtures({ getState }) {
    return getState().fixtures;
}
function getAllFixtureState({ getState }) {
    return getState().fixtureState;
}
function getFixtureState({ getState }, name) {
    return fixtureStateByName(getState().fixtureState, name);
}
function isRendererConnected({ getState }) {
    return getState().connectedRendererIds.length > 0;
}
function selectPrimaryRenderer({ setState }, primaryRendererId) {
    setState(prevState => ({ ...prevState, primaryRendererId }));
}
