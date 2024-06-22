import { userImportsLazyTemplate } from './userImportsLazyTemplate.js';
import { userImportsTemplate } from './userImportsTemplate.js';
export function generateUserImports({ cosmosConfig, modulePaths, rendererConfig, relativeToDir, typeScript, }) {
    const { rootDir, globalImports } = cosmosConfig;
    const template = cosmosConfig.lazy
        ? userImportsLazyTemplate
        : userImportsTemplate;
    return template({
        rootDir,
        modulePaths,
        globalImports,
        rendererConfig,
        relativeToDir,
        typeScript,
    });
}
