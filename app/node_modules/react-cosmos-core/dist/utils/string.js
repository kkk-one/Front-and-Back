export function replaceKeys(str, map) {
    return Object.keys(map).reduce((res, key) => res.replace(key, map[key]), str);
}
