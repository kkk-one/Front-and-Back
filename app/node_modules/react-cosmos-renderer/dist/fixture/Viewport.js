'use client';
import React from 'react';
import { useFixtureState } from './useFixtureState.js';
export function Viewport({ children, width, height }) {
    const [, setViewport] = useFixtureState('viewport');
    React.useEffect(() => {
        setViewport({ width, height });
    }, [setViewport, width, height]);
    return children;
}
Viewport.cosmosCapture = false;
