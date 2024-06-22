import express from 'express';
import { CosmosPluginConfig } from 'react-cosmos-core';
import { CosmosConfig } from '../cosmosConfig/types.js';
import { CosmosPlatform } from '../cosmosPlugin/types.js';
export declare function createExpressApp(platform: CosmosPlatform, cosmosConfig: CosmosConfig, pluginConfigs: CosmosPluginConfig[]): Promise<express.Express>;
