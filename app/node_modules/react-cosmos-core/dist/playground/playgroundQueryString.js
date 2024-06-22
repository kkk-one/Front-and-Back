import { buildQueryString, parseQueryString } from '../utils/queryString.js';
export function buildPlaygroundQueryString(params) {
    return buildQueryString(encodePlaygroundSearchParams(params));
}
export function parsePlaygroundQueryString(query) {
    return decodePlaygroundSearchParams(parseQueryString(query));
}
function encodePlaygroundSearchParams(params) {
    const stringParams = {};
    if (params.fixtureId) {
        stringParams.fixtureId = JSON.stringify(params.fixtureId);
    }
    return stringParams;
}
function decodePlaygroundSearchParams(stringParams) {
    const params = {};
    if (stringParams.fixtureId) {
        params.fixtureId = JSON.parse(stringParams.fixtureId);
    }
    return params;
}
