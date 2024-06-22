import { requireFromSilent } from './utils/requireSilent.js';
export function getWebpack(rootDir) {
    const userWebpack = requireFromSilent(rootDir, 'webpack');
    if (!userWebpack) {
        console.warn('[Cosmos] webpack dependency missing!');
        console.log('Install using "npm install --save-dev webpack" or "yarn add --dev webpack"');
        return;
    }
    return userWebpack;
}
