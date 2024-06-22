import { Base64 } from 'js-base64';
import { buildRendererQueryString } from './rendererQueryString.js';
export function createRendererUrl(rendererUrl, fixtureId, locked) {
    if (hasFixtureVar(rendererUrl)) {
        if (!fixtureId)
            return replaceFixtureVar(rendererUrl, 'index');
        return (replaceFixtureVar(rendererUrl, encodeRendererUrlFixture(fixtureId)) +
            buildRendererQueryString({ locked }));
    }
    else {
        if (!fixtureId)
            return rendererUrl;
        const baseUrl = hostOnlyUrl(rendererUrl) ? rendererUrl + '/' : rendererUrl;
        return baseUrl + buildRendererQueryString({ fixtureId, locked });
    }
}
export function pickRendererUrl(rendererUrl, command) {
    return rendererUrl && typeof rendererUrl === 'object'
        ? rendererUrl[command]
        : rendererUrl ?? null;
}
export function encodeRendererUrlFixture(fixtureId) {
    return Base64.encode(JSON.stringify(fixtureId));
}
export function decodeRendererUrlFixture(fixture) {
    return JSON.parse(Base64.decode(fixture));
}
function hasFixtureVar(rendererUrl) {
    return rendererUrl.includes('<fixture>');
}
function replaceFixtureVar(rendererUrl, fixture) {
    return rendererUrl.replace(/<fixture>/g, fixture);
}
function hostOnlyUrl(url) {
    try {
        const { protocol, pathname } = new URL(url);
        return (protocol === 'http:' || protocol === 'https:') && pathname === '/';
    }
    catch (err) {
        return false;
    }
}
