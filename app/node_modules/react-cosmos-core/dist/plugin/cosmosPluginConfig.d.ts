export type RawCosmosPluginConfig = {
    name: string;
    server?: string;
    ui?: string;
};
export type CosmosPluginConfig = {
    name: string;
    rootDir: string;
    server?: string;
    ui?: string;
};
export type UiCosmosPluginConfig = CosmosPluginConfig & {
    ui: string;
};
