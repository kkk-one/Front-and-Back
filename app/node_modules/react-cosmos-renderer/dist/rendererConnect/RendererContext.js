import React from 'react';
export const RendererContext = React.createContext({
    rendererId: 'default-renderer-id',
    rendererConnect: {
        postMessage: () => { },
        onMessage: () => () => { },
    },
    locked: false,
    selectedFixture: null,
    selectFixture: () => { },
    unselectFixture: () => { },
    reloadRenderer: () => { },
    lazyItems: {},
    setLazyItems: () => { },
});
