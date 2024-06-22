export function parseQueryString(query) {
    return Object.fromEntries(new URLSearchParams(query));
}
export function buildQueryString(searchParams) {
    const queryString = new URLSearchParams(searchParams).toString();
    return queryString && `?${queryString}`;
}
