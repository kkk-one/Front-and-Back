import { registerPlaygroundShortcuts, } from 'react-cosmos-core';
export function createPostMessageConnect() {
    function postMessage(msg) {
        parent.postMessage(msg, '*');
    }
    registerPlaygroundShortcuts(command => {
        postMessage({ type: 'playgroundCommand', payload: { command } });
    });
    return {
        postMessage,
        onMessage(onMessage) {
            function handleMessage(msg) {
                onMessage(msg.data);
            }
            window.addEventListener('message', handleMessage, false);
            return () => {
                window.removeEventListener('message', handleMessage);
            };
        },
    };
}
