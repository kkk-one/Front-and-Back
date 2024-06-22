export function stringifyFixtureId(fixtureId) {
    const { path, name } = fixtureId;
    return name ? `${path}-${name}` : path;
}
