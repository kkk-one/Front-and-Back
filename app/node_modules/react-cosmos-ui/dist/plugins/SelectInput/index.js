import React, { useCallback } from 'react';
import { createPlugin } from 'react-plugin';
import { SelectValueInput } from './SelectValueInput.js';
const { plug, register } = createPlugin({
    name: 'selectInput',
});
plug('input-select', ({ slotProps }) => {
    const { inputName, input, onFixtureStateChange } = slotProps;
    const handleChange = useCallback((selectName, updateInput) => {
        onFixtureStateChange(prevFs => ({
            ...prevFs,
            [selectName]: updateInput,
        }));
    }, [onFixtureStateChange]);
    return (React.createElement(SelectValueInput, { key: inputName, name: inputName, input: input, onChange: handleChange }));
});
export { register };
if (process.env.NODE_ENV !== 'test')
    register();
