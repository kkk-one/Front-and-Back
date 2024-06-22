import { coreServerPlugins } from '../corePlugins/index.js';
import { importServerPlugins } from './importServerPlugins.js';
export async function getServerPlugins(pluginConfigs, rootDir) {
    const userPlugins = await importServerPlugins(pluginConfigs, rootDir);
    return [...coreServerPlugins, ...userPlugins];
}
