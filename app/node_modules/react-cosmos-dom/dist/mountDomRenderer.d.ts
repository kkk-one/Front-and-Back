import { UserModuleWrappers } from 'react-cosmos-core';
import { DomRendererConfig } from './DomRendererConfig.js';
type Args = {
    rendererConfig: DomRendererConfig;
    moduleWrappers: UserModuleWrappers;
};
export declare function mountDomRenderer({ rendererConfig, moduleWrappers }: Args): void;
export {};
