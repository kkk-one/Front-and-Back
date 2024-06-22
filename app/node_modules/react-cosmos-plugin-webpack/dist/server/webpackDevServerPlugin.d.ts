import { DevServerPluginArgs } from 'react-cosmos';
export declare function webpackDevServerPlugin({ cosmosConfig, platform, expressApp, sendMessage, }: DevServerPluginArgs): Promise<(() => Promise<void>) | undefined>;
