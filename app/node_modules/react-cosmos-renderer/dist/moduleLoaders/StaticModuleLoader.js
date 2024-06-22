import React from 'react';
import { getSortedDecoratorsForFixturePath, } from 'react-cosmos-core';
export function StaticModuleLoader({ fixtureWrapper, decorators, fixturePath, renderModules, }) {
    return renderModules(React.useMemo(() => ({
        fixtureModule: fixtureWrapper.module,
        decoratorModules: getSortedDecoratorsForFixturePath(fixturePath, decorators).map(d => d.module),
    }), [decorators, fixturePath, fixtureWrapper.module]));
}
