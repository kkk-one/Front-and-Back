import { isEqual } from 'lodash-es';
import React, { useCallback } from 'react';
import { updateClassStateFixtureStateItem, } from 'react-cosmos-core';
import { SidePanelActions, SidePanelBody, SidePanelContainer, SidePanelHeader, SidePanelTitle, } from '../../../components/SidePanel.js';
import { ExpandCollapseValues } from '../../../components/ValueInputTree/ExpandCollapseValues.js';
import { ValueInputTree, stringifyElementId, } from '../../../components/ValueInputTree/index.js';
import { IconButton32 } from '../../../components/buttons/index.js';
import { RotateCcwIcon } from '../../../components/icons/index.js';
import { classStateFsItemUpdater } from './shared.js';
export function ComponentClassState({ classStateFsItem, fixtureExpansion, onFixtureStateChange, onElementExpansionChange, }) {
    const { componentName, elementId, values } = classStateFsItem;
    const [initialValues] = React.useState(() => values);
    const handleValuesReset = React.useCallback(() => onFixtureStateChange(classStateFsItemUpdater(elementId, prevFs => updateClassStateFixtureStateItem({
        classStateFs: prevFs,
        elementId,
        values: initialValues,
    }))), [elementId, initialValues, onFixtureStateChange]);
    const handleValueChange = React.useCallback((newValues) => {
        onFixtureStateChange(classStateFsItemUpdater(elementId, prevFs => updateClassStateFixtureStateItem({
            classStateFs: prevFs,
            elementId,
            values: newValues,
        })));
    }, [elementId, onFixtureStateChange]);
    const strElementId = stringifyElementId(elementId);
    const expansion = fixtureExpansion[strElementId] || {};
    const setExpansion = useCallback((newExpansion) => onElementExpansionChange(elementId, newExpansion), [elementId, onElementExpansionChange]);
    return (React.createElement(SidePanelContainer, null,
        React.createElement(SidePanelHeader, null,
            React.createElement(SidePanelTitle, { label: "Class State", componentName: componentName }),
            React.createElement(SidePanelActions, null,
                React.createElement(IconButton32, { title: "Reset to initial values", icon: React.createElement(RotateCcwIcon, null), disabled: isEqual(values, initialValues), onClick: handleValuesReset }),
                React.createElement(ExpandCollapseValues, { values: values, expansion: expansion, setExpansion: setExpansion }))),
        React.createElement(SidePanelBody, null,
            React.createElement(ValueInputTree, { id: strElementId, values: values, expansion: expansion, onValueChange: handleValueChange, setExpansion: setExpansion }))));
}
