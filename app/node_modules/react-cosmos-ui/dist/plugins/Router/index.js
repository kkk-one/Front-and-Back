import { isEqual } from 'lodash-es';
import { createPlugin } from 'react-plugin';
import { getUrlParams, pushUrlParams, subscribeToLocationChanges, } from '../../shared/url.js';
const { onLoad, register } = createPlugin({
    name: 'router',
    defaultConfig: {
        initialFixtureId: null,
    },
    initialState: {
        urlParams: {},
    },
    methods: {
        getSelectedFixtureId,
        selectFixture,
        unselectFixture,
    },
});
onLoad(context => {
    const { getConfig, setState } = context;
    const urlParams = getUrlParams();
    setState({ urlParams });
    const { initialFixtureId } = getConfig();
    if (initialFixtureId && !urlParams.fixtureId) {
        selectFixture(context, initialFixtureId);
    }
    return subscribeToLocationChanges((nextUrlParams) => {
        const { fixtureId } = context.getState().urlParams;
        const fixtureChanged = !isEqual(nextUrlParams.fixtureId, fixtureId);
        setState({ urlParams: nextUrlParams }, () => {
            if (fixtureChanged) {
                emitFixtureChangeEvent(context, true);
            }
        });
    });
});
export { register };
if (process.env.NODE_ENV !== 'test')
    register();
function getSelectedFixtureId({ getState }) {
    return getState().urlParams.fixtureId || null;
}
function selectFixture(context, fixtureId) {
    setUrlParams(context, { fixtureId });
}
function unselectFixture(context) {
    setUrlParams(context, {});
}
function setUrlParams(context, nextUrlParams) {
    const { urlParams } = context.getState();
    const fixtureChanged = !isEqual(nextUrlParams.fixtureId, urlParams.fixtureId);
    const urlParamsEqual = isEqual(nextUrlParams, urlParams);
    if (urlParamsEqual) {
        // Setting identical URL params can be considered a "reset" request, but
        // this will only re-render the fixture if the renderer implements an
        // auto-incrementing render key in its state
        emitFixtureChangeEvent(context, false);
    }
    else {
        context.setState({ urlParams: nextUrlParams }, () => {
            pushUrlParams(context.getState().urlParams);
            emitFixtureChangeEvent(context, fixtureChanged);
        });
    }
}
function emitFixtureChangeEvent(context, fixtureChanged) {
    const fixtureId = getSelectedFixtureId(context);
    if (!fixtureId) {
        context.emit('fixtureUnselect');
    }
    else if (fixtureChanged) {
        context.emit('fixtureSelect', fixtureId);
    }
    else {
        context.emit('fixtureReselect', fixtureId);
    }
}
