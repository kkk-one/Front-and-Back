import { CosmosCommand } from 'react-cosmos-core';
import { CosmosConfig } from '../cosmosConfig/types.js';
import { CosmosPlatform, CosmosServerPlugin } from '../cosmosPlugin/types.js';
type Args = {
    cosmosConfig: CosmosConfig;
    serverPlugins: CosmosServerPlugin[];
    command: CosmosCommand;
    platform: CosmosPlatform;
};
export declare function applyServerConfigPlugins({ cosmosConfig, serverPlugins, command, platform, }: Args): Promise<CosmosConfig>;
export {};
