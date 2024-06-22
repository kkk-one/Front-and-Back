import React from 'react';
import { FixtureId } from 'react-cosmos-core';
import { GetFixtureState, SetFixtureStateByName } from '../RendererCore/spec.js';
type Props = {
    fixtureId: FixtureId;
    getFixtureState: GetFixtureState;
    setFixtureState: SetFixtureStateByName;
    sidePanelRowOrder: string[];
};
export declare const SidePanel: React.NamedExoticComponent<Props>;
export {};
