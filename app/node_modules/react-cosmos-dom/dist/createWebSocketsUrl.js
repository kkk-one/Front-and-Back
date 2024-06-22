export function createWebSocketsUrl(playgroundUrl) {
    return playgroundUrl.replace(/^https:/, 'wss:').replace(/^http:/, 'ws:');
}
