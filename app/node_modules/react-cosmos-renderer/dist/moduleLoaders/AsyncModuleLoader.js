import { getSortedDecoratorsForFixturePath, } from 'react-cosmos-core';
import { importLazyFixtureModules } from './importLazyFixtureModules.js';
export async function AsyncModuleLoader({ moduleWrappers, fixturePath, renderModules, }) {
    return renderModules(await getModules(moduleWrappers, fixturePath));
}
async function getModules(moduleWrappers, fixturePath) {
    if (moduleWrappers.lazy) {
        return await importLazyFixtureModules(moduleWrappers.fixtures[fixturePath], getSortedDecoratorsForFixturePath(fixturePath, moduleWrappers.decorators));
    }
    return {
        fixtureModule: moduleWrappers.fixtures[fixturePath].module,
        decoratorModules: getSortedDecoratorsForFixturePath(fixturePath, moduleWrappers.decorators).map(d => d.module),
    };
}
