'use client';
import React from 'react';
import { RendererContext } from './RendererContext.js';
export function RendererProvider(props) {
    const [lazyItems, setLazyItems] = React.useState({});
    const value = React.useMemo(() => {
        return {
            rendererId: props.rendererId,
            rendererConnect: props.rendererConnect,
            locked: props.locked,
            selectedFixture: props.selectedFixture,
            selectFixture: props.selectFixture,
            unselectFixture: props.unselectFixture,
            reloadRenderer: props.reloadRenderer,
            lazyItems,
            setLazyItems,
        };
    }, [
        lazyItems,
        props.locked,
        props.reloadRenderer,
        props.rendererConnect,
        props.rendererId,
        props.selectFixture,
        props.selectedFixture,
        props.unselectFixture,
    ]);
    return (React.createElement(RendererContext.Provider, { value: value }, props.children));
}
