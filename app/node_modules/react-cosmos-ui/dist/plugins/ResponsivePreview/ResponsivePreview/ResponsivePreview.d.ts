import React, { ReactNode } from 'react';
import { Dispatch, SetStateAction, Viewport } from 'react-cosmos-core';
import { ResponsiveDevice } from '../spec.js';
type Props = {
    children?: ReactNode;
    devices: ResponsiveDevice[];
    enabled: boolean;
    viewport: Viewport;
    scaled: boolean;
    setViewport: Dispatch<SetStateAction<Viewport>>;
    setScaled: (scaled: boolean) => unknown;
};
export declare function ResponsivePreview({ children, devices, enabled, viewport, scaled, setViewport, setScaled, }: Props): React.JSX.Element;
export {};
