import { postSelectFixtureRequest } from './shared/postRequest.js';
export function onRouterFixtureSelect(context, fixtureId) {
    context.setState(prevState => ({ ...prevState, fixtureState: {} }), () => {
        const { connectedRendererIds, globalFixtureState } = context.getState();
        connectedRendererIds.forEach(rendererId => {
            postSelectFixtureRequest(context, rendererId, fixtureId, globalFixtureState);
        });
    });
}
