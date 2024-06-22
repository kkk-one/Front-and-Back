import styled from 'styled-components';
export const ValueTreeItem = styled.div `
  padding: 0 0 0 ${props => getLeftPadding(props.indentLevel)}px;
`;
export function stringifyElementId(elementId) {
    const { decoratorId, elPath } = elementId;
    return elPath ? `${decoratorId}-${elPath}` : decoratorId;
}
function getLeftPadding(depth) {
    return depth * 12;
}
