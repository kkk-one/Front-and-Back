import { Viewport } from 'react-cosmos-core';
import { PluginContext } from 'react-plugin';
import { StorageSpec } from '../Storage/spec.js';
import { ResponsivePreviewSpec } from './spec.js';
export type ResponsivePreviewContext = PluginContext<ResponsivePreviewSpec>;
export type StorageMethods = StorageSpec['methods'];
export type ViewportState = {
    enabled: boolean;
    scaled: boolean;
    viewport: Viewport;
};
export declare const DEFAULT_DEVICES: {
    label: string;
    width: number;
    height: number;
}[];
export declare const VIEWPORT_STORAGE_KEY = "responsiveViewportState";
export declare const DEFAULT_VIEWPORT_STATE: ViewportState;
