'use client';
import React from 'react';
import { RendererProvider } from './RendererProvider.js';
export function StatefulRendererProvider({ children, selectedFixtureId, ...otherProps }) {
    const [selectedFixture, setSelectedFixture] = React.useState(() => selectedFixtureId && {
        fixtureId: selectedFixtureId,
        initialFixtureState: {},
        renderKey: 0,
    });
    const selectFixture = React.useCallback((fixtureId, initialFixtureState) => {
        setSelectedFixture(prevState => ({
            fixtureId,
            initialFixtureState,
            renderKey: (prevState?.renderKey ?? 0) + 1,
        }));
    }, []);
    const unselectFixture = React.useCallback(() => {
        setSelectedFixture(null);
    }, []);
    return (React.createElement(RendererProvider, { ...otherProps, selectedFixture: selectedFixture, selectFixture: selectFixture, unselectFixture: unselectFixture }, children));
}
