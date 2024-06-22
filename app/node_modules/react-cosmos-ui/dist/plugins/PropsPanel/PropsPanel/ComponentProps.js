import { isEqual } from 'lodash-es';
import React, { useCallback } from 'react';
import { resetPropsFixtureStateItem, updatePropsFixtureStateItem, } from 'react-cosmos-core';
import { SidePanelActions, SidePanelBody, SidePanelContainer, SidePanelHeader, SidePanelTitle, } from '../../../components/SidePanel.js';
import { ExpandCollapseValues } from '../../../components/ValueInputTree/ExpandCollapseValues.js';
import { ValueInputTree, stringifyElementId, } from '../../../components/ValueInputTree/index.js';
import { IconButton32 } from '../../../components/buttons/index.js';
import { CopyIcon, RotateCcwIcon } from '../../../components/icons/index.js';
import { propsFsItemUpdater } from './shared.js';
export function ComponentProps({ propsFsItem, fixtureExpansion, onFixtureStateChange, onElementExpansionChange, }) {
    const { componentName, elementId, values } = propsFsItem;
    const [reset, setReset] = React.useState(true);
    const handleResetToggle = React.useCallback(() => setReset(!reset), [reset]);
    const [initialValues] = React.useState(() => values);
    const handleValuesReset = React.useCallback(() => onFixtureStateChange(propsFsItemUpdater(elementId, prevFs => resetPropsFixtureStateItem({
        propsFs: prevFs,
        elementId,
        values: initialValues,
    }))), [elementId, initialValues, onFixtureStateChange]);
    const handleValueChange = React.useCallback((newValues) => {
        const changeFn = reset
            ? resetPropsFixtureStateItem
            : updatePropsFixtureStateItem;
        onFixtureStateChange(propsFsItemUpdater(elementId, prevFs => changeFn({
            propsFs: prevFs,
            elementId,
            values: newValues,
        })));
    }, [elementId, reset, onFixtureStateChange]);
    const strElementId = stringifyElementId(elementId);
    const expansion = fixtureExpansion[strElementId] || {};
    const setExpansion = useCallback((newExpansion) => onElementExpansionChange(elementId, newExpansion), [elementId, onElementExpansionChange]);
    return (React.createElement(SidePanelContainer, null,
        React.createElement(SidePanelHeader, null,
            React.createElement(SidePanelTitle, { label: "Props", componentName: componentName }),
            React.createElement(SidePanelActions, null,
                React.createElement(IconButton32, { title: "Reset to initial values", icon: React.createElement(RotateCcwIcon, null), disabled: isEqual(values, initialValues), onClick: handleValuesReset }),
                React.createElement(IconButton32, { title: "Reuse instances on prop changes", icon: React.createElement(CopyIcon, null), selected: !reset, disabled: false, onClick: handleResetToggle }),
                React.createElement(ExpandCollapseValues, { values: values, expansion: expansion, setExpansion: setExpansion }))),
        React.createElement(SidePanelBody, null,
            React.createElement(ValueInputTree, { id: strElementId, values: values, expansion: expansion, setExpansion: setExpansion, onValueChange: handleValueChange }))));
}
