export function fixtureStateByName(fixtureState, name) {
    return fixtureState[name];
}
export function updateFixtureState(fixtureState, name, change) {
    const prevFs = fixtureStateByName(fixtureState, name);
    const nextFs = applyFixtureStateChange(prevFs, change);
    // Avoid unnecessary state updates
    if (nextFs === prevFs) {
        return fixtureState;
    }
    return {
        ...fixtureState,
        [name]: nextFs,
    };
}
export function applyFixtureStateChange(prevState, change) {
    return isStateUpdater(change) ? change(prevState) : change;
}
function isStateUpdater(change) {
    return typeof change === 'function';
}
