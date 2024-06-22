import { FixtureId } from '../userModules/fixtureTypes.js';
type RendererParams = {
    fixtureId?: FixtureId;
    locked?: boolean;
};
export type RendererSearchParams = {
    fixtureId?: string;
    locked?: string;
};
export declare function buildRendererQueryString(params: RendererParams): string;
export declare function parseRendererQueryString(query: string): RendererParams;
export {};
