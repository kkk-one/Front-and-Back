import { PlaygroundParams } from 'react-cosmos-core';
export declare function getUrlParams(): PlaygroundParams;
export declare function pushUrlParams(urlParams: PlaygroundParams): void;
export declare function subscribeToLocationChanges(userHandler: (urlParams: PlaygroundParams) => unknown): () => void;
export declare function createRelativePlaygroundUrl(urlParams: PlaygroundParams): string;
export declare function createRelativeUrlWithQuery(query: string): string;
