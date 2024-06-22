import path from 'node:path';
import { RENDERER_FILENAME } from './webpackConfig/constants.js';
export async function webpackConfigPlugin({ cosmosConfig, }) {
    if (cosmosConfig.rendererUrl) {
        return cosmosConfig;
    }
    return {
        ...cosmosConfig,
        rendererUrl: path.join(cosmosConfig.publicUrl, RENDERER_FILENAME),
    };
}
