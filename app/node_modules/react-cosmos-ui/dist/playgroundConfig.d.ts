import { CosmosPluginConfig } from 'react-cosmos-core';
import { CoreSpec } from './plugins/Core/spec.js';
import { RendererCoreSpec } from './plugins/RendererCore/spec.js';
export type PlaygroundConfig = {
    core: CoreSpec['config'];
    rendererCore: RendererCoreSpec['config'];
    [pluginName: string]: {};
};
export type PlaygroundMountArgs = {
    playgroundConfig: PlaygroundConfig;
    pluginConfigs: CosmosPluginConfig[];
};
