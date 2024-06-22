import { postReloadRendererRequest } from './shared/postRequest.js';
export function reloadRenderer(context) {
    const { connectedRendererIds } = context.getState();
    connectedRendererIds.forEach(rendererId => postReloadRendererRequest(context, rendererId));
}
