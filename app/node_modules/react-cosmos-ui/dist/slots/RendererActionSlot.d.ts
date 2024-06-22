import React from 'react';
import { FixtureId } from 'react-cosmos-core';
export type RendererActionSlotProps = {
    fixtureId: FixtureId;
};
type Props = {
    slotProps: RendererActionSlotProps;
    plugOrder: string[];
};
export declare function RendererActionSlot({ slotProps, plugOrder }: Props): React.JSX.Element;
export {};
