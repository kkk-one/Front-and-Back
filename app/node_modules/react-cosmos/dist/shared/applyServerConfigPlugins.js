export async function applyServerConfigPlugins({ cosmosConfig, serverPlugins, command, platform, }) {
    for (const plugin of serverPlugins) {
        if (plugin.config) {
            try {
                cosmosConfig = await plugin.config({ cosmosConfig, command, platform });
            }
            catch (err) {
                console.log(`[Cosmos][plugin:${plugin.name}] Config hook failed`);
                throw err;
            }
        }
    }
    return cosmosConfig;
}
