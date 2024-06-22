import React, { useCallback } from 'react';
import { createPlugin } from 'react-plugin';
import { InputsPanel } from './InputsPanel.js';
const { namedPlug, register } = createPlugin({
    name: 'inputsPanel',
    defaultConfig: {
        actionOrder: [],
    },
});
namedPlug('sidePanelRow', 'inputs', ({ pluginContext, slotProps }) => {
    const { actionOrder } = pluginContext.getConfig();
    const { getFixtureState, setFixtureState } = slotProps;
    const fixtureState = getFixtureState('inputs');
    const onFixtureStateChange = useCallback(update => setFixtureState('inputs', update), [setFixtureState]);
    return (React.createElement(InputsPanel, { fixtureState: fixtureState, actionOrder: actionOrder, onFixtureStateChange: onFixtureStateChange }));
});
export { register };
if (process.env.NODE_ENV !== 'test')
    register();
