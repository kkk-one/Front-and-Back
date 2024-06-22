export async function importLazyFixtureModules(fixtureWrapper, decoratorWrappers) {
    return {
        fixtureModule: await fixtureWrapper.getModule(),
        decoratorModules: await Promise.all(decoratorWrappers.map(d => d.getModule())),
    };
}
