import { find, isEqual } from 'lodash-es';
import { removeItemMatch, replaceOrAddItem, updateItem, } from '../utils/array.js';
export const DEFAULT_RENDER_KEY = 0;
export function filterPropsFixtureState(propsFs, decoratorId) {
    return propsFs
        ? propsFs.filter(p => p.elementId.decoratorId === decoratorId)
        : [];
}
export function findPropsFixtureStateItem(propsFs, elementId) {
    return propsFs && find(propsFs, p => isEqual(p.elementId, elementId));
}
export function createPropsFixtureStateItem({ propsFs, elementId, values, componentName, }) {
    return replaceOrAddItem(propsFs ?? [], createPropsMatcher(elementId), {
        elementId,
        values,
        renderKey: DEFAULT_RENDER_KEY,
        componentName,
    });
}
export function resetPropsFixtureStateItem({ propsFs, elementId, values, }) {
    const item = expectPropsItem(propsFs, elementId);
    return updateItem(propsFs, item, {
        values,
        renderKey: item.renderKey + 1,
    });
}
export function updatePropsFixtureStateItem({ propsFs, elementId, values, }) {
    const item = expectPropsItem(propsFs, elementId);
    return updateItem(propsFs, item, { values });
}
export function removePropsFixtureStateItem(propsFs, elementId) {
    return removeItemMatch(propsFs ?? [], createPropsMatcher(elementId));
}
function createPropsMatcher(elementId) {
    return (p) => isEqual(p.elementId, elementId);
}
function expectPropsItem(propsFs, elementId) {
    const item = findPropsFixtureStateItem(propsFs, elementId);
    if (!item) {
        const elId = JSON.stringify(elementId);
        throw new Error(`Fixture state props missing for element "${elId}"`);
    }
    return item;
}
