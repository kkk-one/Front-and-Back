import { find, isEqual } from 'lodash-es';
import { removeItemMatch, replaceOrAddItem, updateItem, } from '../utils/array.js';
export function filterClassStateFixtureState(classStateFs, decoratorId) {
    return classStateFs
        ? classStateFs.filter(s => s.elementId.decoratorId === decoratorId)
        : [];
}
export function findClassStateFixtureStateItem(classStateFs, elementId) {
    return (classStateFs && find(classStateFs, s => isEqual(s.elementId, elementId)));
}
export function createClassStateFixtureStateItem({ classStateFs, elementId, values, componentName, }) {
    return replaceOrAddItem(classStateFs ?? [], createClassStateMatcher(elementId), { elementId, values, componentName });
}
export function updateClassStateFixtureStateItem({ classStateFs, elementId, values, }) {
    const item = expectClassStateItem(classStateFs, elementId);
    return updateItem(classStateFs, item, { values });
}
export function removeClassStateFixtureStateItem(classStateFs, elementId) {
    return removeItemMatch(classStateFs ?? [], createClassStateMatcher(elementId));
}
function createClassStateMatcher(elementId) {
    return (p) => isEqual(p.elementId, elementId);
}
function expectClassStateItem(classStateFs, elementId) {
    const item = findClassStateFixtureStateItem(classStateFs, elementId);
    if (!item) {
        const elId = JSON.stringify(elementId);
        throw new Error(`Fixture state class state missing for element "${elId}"`);
    }
    return item;
}
