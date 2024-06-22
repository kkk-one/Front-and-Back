import { isEqual } from 'lodash-es';
import { postSelectFixtureRequest, postSetFixtureStateRequest, } from '../shared/postRequest.js';
export function receiveRendererReadyResponse(context, { payload }) {
    const { rendererId } = payload;
    const { connectedRendererIds: prevRendererIds, globalFixtureState } = context.getState();
    context.setState(stateUpdater, afterStateChanged);
    function stateUpdater(prevState) {
        // The first announced renderer becomes the primary one
        const primaryRendererId = prevState.primaryRendererId || rendererId;
        const { connectedRendererIds, fixtureState } = prevState;
        return {
            ...prevState,
            connectedRendererIds: addToSet(connectedRendererIds, rendererId),
            primaryRendererId,
            fixtureState: rendererId === primaryRendererId ? globalFixtureState : fixtureState,
        };
    }
    function afterStateChanged() {
        const router = context.getMethodsOf('router');
        const rendererFixtureId = payload.selectedFixtureId;
        const routerFixtureId = router.getSelectedFixtureId();
        if (routerFixtureId && !isEqual(routerFixtureId, rendererFixtureId)) {
            const { fixtureState } = context.getState();
            postSelectFixtureRequest(context, rendererId, routerFixtureId, fixtureState);
        }
        else if (rendererFixtureId) {
            if (Object.keys(globalFixtureState).length > 0) {
                postSetFixtureStateRequest(context, rendererId, rendererFixtureId, globalFixtureState);
            }
        }
        // Notify about connected renderers that weren't connected before
        if (!prevRendererIds.includes(rendererId)) {
            notifyRendererConnection(context, rendererId);
        }
    }
}
function notifyRendererConnection({ getMethodsOf }, rendererId) {
    const notifications = getMethodsOf('notifications');
    notifications.pushTimedNotification({
        id: `renderer-connect-${rendererId}`,
        type: 'info',
        title: 'Renderer connected',
        info: 'Your fixtures are ready to use.',
    });
}
function addToSet(set, item) {
    return set.indexOf(item) === -1 ? [...set, item] : set;
}
