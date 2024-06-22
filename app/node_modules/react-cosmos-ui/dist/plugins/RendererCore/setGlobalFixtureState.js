import { setFixtureState } from './setFixtureState.js';
import { getSelectedFixtureId } from './shared/router.js';
export function setGlobalFixtureState(context, name, state) {
    context.setState(prevState => ({
        ...prevState,
        globalFixtureState: {
            ...prevState.globalFixtureState,
            [name]: state,
        },
    }));
    const fixtureId = getSelectedFixtureId(context);
    if (fixtureId) {
        setFixtureState(context, name, state);
    }
}
