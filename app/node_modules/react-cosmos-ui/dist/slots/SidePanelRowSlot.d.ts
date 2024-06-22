import React from 'react';
import { FixtureId } from 'react-cosmos-core';
import { GetFixtureState, SetFixtureStateByName } from '../plugins/RendererCore/spec.js';
export type SidePanelRowSlotProps = {
    fixtureId: FixtureId;
    getFixtureState: GetFixtureState;
    setFixtureState: SetFixtureStateByName;
};
type Props = {
    slotProps: SidePanelRowSlotProps;
    plugOrder: string[];
};
export declare function SidePanelRowSlot({ slotProps, plugOrder }: Props): React.JSX.Element;
export {};
