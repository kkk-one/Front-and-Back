import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useFocus } from '../../hooks/useFocus.js';
import { isGroupedOptions, } from '../../shared/groupedOptions.js';
import { blue, grey32 } from '../../style/colors.js';
import { ChevronDownIcon } from '../icons/index.js';
const CUSTOM_LABEL = 'Custom';
export function Select({ id, testId, options, value, color, height, padding, onChange, }) {
    const { focused, onFocus, onBlur } = useFocus();
    const onInputChange = useCallback((e) => {
        const option = findOption(options, e.target.value);
        if (!option) {
            throw new Error(`Select value doesn't match any option`);
        }
        onChange(option);
    }, [onChange, options]);
    const renderOption = (option) => (React.createElement("option", { key: option.value, value: option.value }, option.label));
    const selectedOption = findOption(options, value);
    const selectedLabel = selectedOption ? selectedOption.label : CUSTOM_LABEL;
    return (React.createElement(Container, { focused: focused, bg: grey32 },
        React.createElement(VisibleButton, { height: height, padding: padding },
            React.createElement(Label, { height: height, color: color }, selectedLabel),
            React.createElement(IconContainer, { color: color },
                React.createElement(ChevronDownIcon, null))),
        React.createElement(SelectInput, { id: id, "data-testid": testId, value: value, onFocus: onFocus, onBlur: onBlur, onChange: onInputChange },
            !selectedOption && (React.createElement("option", { key: "custom-option", value: value }, CUSTOM_LABEL)),
            isGroupedOptions(options)
                ? options.map((current, groupIdx) => {
                    return (React.createElement("optgroup", { label: current.group, key: groupIdx }, current.options.map(renderOption)));
                })
                : options.map(renderOption))));
}
function findOption(options, targetValue) {
    return (isGroupedOptions(options) ? options.flatMap(o => o.options) : options).find(o => o.value === targetValue);
}
const Container = styled.div `
  position: relative;
  border-radius: 3px;
  background: ${props => props.bg};
  box-shadow: ${props => (props.focused ? `0 0 0.5px 1px ${blue}` : 'none')};
  overflow: hidden;
`;
const VisibleButton = styled.div `
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 ${props => props.padding - 2}px 0 ${props => props.padding}px;
  height: ${props => props.height}px;
`;
const Label = styled.span `
  color: ${props => props.color};
  line-height: ${props => props.height}px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
const iconSize = 16;
const IconContainer = styled.span `
  flex-shrink: 0;
  width: ${iconSize}px;
  height: ${iconSize}px;
  padding: 2px 0 0 2px;
  color: ${props => props.color};
  opacity: 0.7;
`;
const SelectInput = styled.select `
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  -webkit-appearance: none;
  appearance: none;
  outline: none;
  opacity: 0;
`;
