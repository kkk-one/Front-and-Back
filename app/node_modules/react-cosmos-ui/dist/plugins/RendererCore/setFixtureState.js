import { updateFixtureState, } from 'react-cosmos-core';
import { postSetFixtureStateRequest } from './shared/postRequest.js';
import { getSelectedFixtureId } from './shared/router.js';
export function setFixtureState(context, name, change) {
    const fixtureId = getSelectedFixtureId(context);
    if (!fixtureId) {
        console.warn('[Renderer] Trying to set fixture state with no fixture selected');
        return;
    }
    context.setState(stateUpdater, () => {
        postRendererRequest(fixtureId);
    });
    function stateUpdater(prevState) {
        return {
            ...prevState,
            fixtureState: updateFixtureState(prevState.fixtureState, name, change),
        };
    }
    function postRendererRequest(selectedFixtureId) {
        const { connectedRendererIds, fixtureState } = context.getState();
        connectedRendererIds.forEach(rendererId => postSetFixtureStateRequest(context, rendererId, selectedFixtureId, fixtureState));
    }
}
