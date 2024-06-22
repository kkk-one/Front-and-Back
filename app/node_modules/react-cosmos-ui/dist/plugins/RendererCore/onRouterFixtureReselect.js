import { postSelectFixtureRequest } from './shared/postRequest.js';
export function onRouterFixtureReselect(context, fixtureId) {
    const { connectedRendererIds, globalFixtureState } = context.getState();
    connectedRendererIds.forEach(rendererId => {
        postSelectFixtureRequest(context, rendererId, fixtureId, globalFixtureState);
    });
}
