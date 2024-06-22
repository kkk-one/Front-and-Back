import React from 'react';
import { Viewport } from 'react-cosmos-core';
import { ResponsiveDevice } from '../spec.js';
type Props = {
    devices: ResponsiveDevice[];
    selectedViewport: Viewport;
    scaleFactor: number;
    scaled: boolean;
    selectViewport: (viewport: Viewport) => unknown;
    toggleScale: () => unknown;
};
export declare const ResponsiveHeader: React.NamedExoticComponent<Props>;
export declare const RotateButton: import("styled-components").StyledComponent<"button", any, {}, never>;
export {};
