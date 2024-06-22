import React from 'react';
import { hasFsValues, sortFsValueGroups, stringifyElementId, } from '../../../components/ValueInputTree/index.js';
import { ComponentProps } from './ComponentProps.js';
export const PropsPanel = React.memo(function PropsPanel({ fixtureState, fixtureExpansion, onFixtureStateChange, onElementExpansionChange, }) {
    if (!fixtureState) {
        return null;
    }
    const propsWithValues = fixtureState.filter(hasFsValues);
    return (React.createElement(React.Fragment, null, sortFsValueGroups(propsWithValues).map(fsItem => {
        const strElementId = stringifyElementId(fsItem.elementId);
        return (React.createElement(ComponentProps, { key: strElementId, propsFsItem: fsItem, fixtureExpansion: fixtureExpansion, onFixtureStateChange: onFixtureStateChange, onElementExpansionChange: onElementExpansionChange }));
    })));
});
