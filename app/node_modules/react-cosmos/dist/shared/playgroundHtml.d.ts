import { CosmosPluginConfig } from 'react-cosmos-core';
import { CosmosConfig } from '../cosmosConfig/types.js';
import { CosmosPlatform } from '../cosmosPlugin/types.js';
export declare function getDevPlaygroundHtml(platform: CosmosPlatform, cosmosConfig: CosmosConfig, pluginConfigs: CosmosPluginConfig[]): Promise<string>;
export declare function getExportPlaygroundHtml(cosmosConfig: CosmosConfig, pluginConfigs: CosmosPluginConfig[]): Promise<string>;
