import React from 'react';
import { DelayRender } from 'react-cosmos-core';
import styled from 'styled-components';
import { SlidersIcon } from '../../components/icons/index.js';
import { grey160, grey224, grey32, grey64 } from '../../style/colors.js';
export function BlankState() {
    return (React.createElement(DelayRender, { delay: 500 },
        React.createElement(Container, null,
            React.createElement(IconContainer, null,
                React.createElement(SlidersIcon, null)),
            React.createElement(Title, null,
                "No inputs in ",
                React.createElement(NoWrap, null, "selected fixture")),
            React.createElement(Description, null,
                "Props from Node fixtures and custom fixture inputs",
                ' ',
                React.createElement(NoWrap, null, "will appear here.")))));
}
const Container = styled.div `
  padding: 16px 24px;
  background: ${grey32};
  font-size: 14px;
  line-height: 22px;
`;
const iconSize = 32;
export const IconContainer = styled.div `
  margin: 16px auto;
  display: flex;
  width: ${iconSize}px;
  height: ${iconSize}px;
  color: ${grey64};
`;
const Title = styled.div `
  margin: 0 0 16px 0;
  color: ${grey224};
  text-align: center;
  font-weight: 500;
`;
const Description = styled.div `
  margin: 0 auto;
  max-width: 256px;
  color: ${grey160};
  text-align: center;
`;
export const NoWrap = styled.span `
  white-space: nowrap;
`;
