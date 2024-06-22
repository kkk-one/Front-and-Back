import { RendererConfig } from 'react-cosmos-core';
export type UserModulePaths = {
    fixturePaths: string[];
    decoratorPaths: string[];
};
export type UserImportsTemplateArgs = {
    rootDir: string;
    modulePaths: UserModulePaths;
    globalImports: string[];
    rendererConfig: RendererConfig;
    relativeToDir: string | null;
    typeScript: boolean;
};
export declare function getFixturePatterns(fixturesDir: string, fixtureFileSuffix: string): string[];
export declare function getDecoratorPatterns(): string[];
export declare function createImportMap(paths: string[], rootDir: string, relativeToDir: string | null): Record<string, string>;
export declare function importKeyPath(filePath: string, rootDir: string): string;
export declare function importPath(filePath: string, relativeToDir: string | null): string;
