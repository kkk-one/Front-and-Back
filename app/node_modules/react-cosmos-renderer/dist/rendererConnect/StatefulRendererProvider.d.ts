import React from 'react';
import { FixtureId, RendererConnect } from 'react-cosmos-core';
type Props = {
    children: React.ReactNode;
    rendererId: string;
    rendererConnect: RendererConnect;
    locked: boolean;
    selectedFixtureId: FixtureId | null;
    reloadRenderer(): void;
};
export declare function StatefulRendererProvider({ children, selectedFixtureId, ...otherProps }: Props): React.JSX.Element;
export {};
