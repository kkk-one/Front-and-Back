import React from 'react';
import { FixtureId, FixtureState, RendererConnect } from 'react-cosmos-core';
import { SelectedFixture } from '../fixtureLoaders/SelectedFixture.js';
type Props = {
    children: React.ReactNode;
    rendererId: string;
    rendererConnect: RendererConnect;
    locked: boolean;
    selectedFixture: SelectedFixture | null;
    selectFixture(fixtureId: FixtureId, initialFixtureState: FixtureState): void;
    unselectFixture(): void;
    reloadRenderer(): void;
};
export declare function RendererProvider(props: Props): React.JSX.Element;
export {};
