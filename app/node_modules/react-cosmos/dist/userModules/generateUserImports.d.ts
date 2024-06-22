import { RendererConfig } from 'react-cosmos-core';
import { CosmosConfig } from '../cosmosConfig/types.js';
import { UserModulePaths } from './shared.js';
type Args<T extends RendererConfig> = {
    cosmosConfig: CosmosConfig;
    modulePaths: UserModulePaths;
    rendererConfig: T;
    relativeToDir: string | null;
    typeScript: boolean;
};
export declare function generateUserImports<T extends RendererConfig>({ cosmosConfig, modulePaths, rendererConfig, relativeToDir, typeScript, }: Args<T>): string;
export {};
