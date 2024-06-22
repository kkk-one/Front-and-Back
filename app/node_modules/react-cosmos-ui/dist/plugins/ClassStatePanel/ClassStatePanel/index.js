import React from 'react';
import { hasFsValues, sortFsValueGroups, stringifyElementId, } from '../../../components/ValueInputTree/index.js';
import { ComponentClassState } from './ComponentClassState.js';
export const ClassStatePanel = React.memo(function ClassStatePanel({ fixtureState, fixtureExpansion, onFixtureStateChange, onElementExpansionChange, }) {
    if (!fixtureState) {
        return null;
    }
    const classStateWithValues = fixtureState.filter(hasFsValues);
    return (React.createElement(React.Fragment, null, sortFsValueGroups(classStateWithValues).map(fsItem => {
        const strElementId = stringifyElementId(fsItem.elementId);
        return (React.createElement(ComponentClassState, { key: strElementId, classStateFsItem: fsItem, fixtureExpansion: fixtureExpansion, onFixtureStateChange: onFixtureStateChange, onElementExpansionChange: onElementExpansionChange }));
    })));
});
