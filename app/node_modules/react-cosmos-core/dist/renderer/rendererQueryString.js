import { buildQueryString, parseQueryString } from '../utils/queryString.js';
export function buildRendererQueryString(params) {
    return buildQueryString(encodeRendererSearchParams(params));
}
export function parseRendererQueryString(query) {
    return decodeRendererSearchParams(parseQueryString(query));
}
function encodeRendererSearchParams(params) {
    const stringParams = {};
    if (params.fixtureId) {
        stringParams.fixtureId = JSON.stringify(params.fixtureId);
    }
    if (params.locked) {
        stringParams.locked = 'true';
    }
    return stringParams;
}
function decodeRendererSearchParams(stringParams) {
    const params = {};
    if (stringParams.fixtureId) {
        params.fixtureId = JSON.parse(stringParams.fixtureId);
    }
    if (stringParams.locked) {
        params.locked = stringParams.locked === 'true';
    }
    return params;
}
