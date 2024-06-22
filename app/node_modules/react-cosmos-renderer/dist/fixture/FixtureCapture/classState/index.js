import React from 'react';
import { useFixtureClassState } from './useFixtureClassState.js';
import { useReadClassState } from './useReadClassState.js';
export function useClassStateCapture(fixture, decoratorId) {
    const elRefs = React.useRef({});
    React.useEffect(() => {
        return () => {
            elRefs.current = {};
        };
    }, []);
    useReadClassState(fixture, decoratorId, elRefs);
    return useFixtureClassState(fixture, decoratorId, elRefs);
}
