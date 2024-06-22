import React from 'react';
import { DelayRender, getFixtureListFromWrappers, } from 'react-cosmos-core';
import { RendererSync } from './RendererSync.js';
export function FixtureLoaderConnect({ moduleWrappers, selectedFixture, renderMessage, renderFixture, }) {
    const fixtures = React.useMemo(() => getFixtureListFromWrappers(moduleWrappers), [moduleWrappers]);
    function renderInner() {
        if (!selectedFixture) {
            return (React.createElement(DelayRender, { delay: 500 }, renderMessage('No fixture selected.')));
        }
        const { fixtureId } = selectedFixture;
        if (!fixtures[fixtureId.path]) {
            return renderMessage(`Fixture path not found: ${fixtureId.path}`);
        }
        return renderFixture(selectedFixture);
    }
    return React.createElement(RendererSync, { fixtures: fixtures }, renderInner());
}
