export function createNoopRendererConnect() {
    return {
        postMessage() { },
        onMessage() {
            return () => { };
        },
    };
}
