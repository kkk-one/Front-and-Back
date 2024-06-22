import React from 'react';
import { getSortedDecoratorsForFixturePath, } from 'react-cosmos-core';
import { importLazyFixtureModules } from './importLazyFixtureModules.js';
export function LazyModuleLoader({ fixtureWrapper, decorators, fixturePath, renderModules, }) {
    const modules = useLazyFixtureModules(fixturePath, fixtureWrapper, decorators);
    return modules && renderModules(modules);
}
function useLazyFixtureModules(fixturePath, fixtureWrapper, decoratorWrappers) {
    const [state, setState] = React.useState(null);
    React.useEffect(() => {
        let canceled = false;
        (async () => {
            const modules = await importLazyFixtureModules(fixtureWrapper, getSortedDecoratorsForFixturePath(fixturePath, decoratorWrappers));
            if (!canceled) {
                setState({ fixturePath, modules });
            }
        })();
        return () => {
            canceled = true;
        };
    }, [decoratorWrappers, fixturePath, fixtureWrapper]);
    // Stop returning modules once fixturePath changed to prevent rendering
    // the previous fixture until the new fixture modules are loaded
    return state && state.fixturePath === fixturePath ? state.modules : null;
}
