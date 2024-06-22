import { FixtureElementId, FixtureStatePrimitiveValue, FixtureStateUnserializableValue, TreeNode } from 'react-cosmos-core';
export type LeafValue = FixtureStatePrimitiveValue | FixtureStateUnserializableValue;
export type ValueNodeData = {
    type: 'collection';
    isArray: boolean;
} | {
    type: 'item';
    value: LeafValue;
};
export type ValueNode = TreeNode<ValueNodeData>;
type ValueTreeItemProps = {
    indentLevel: number;
};
export declare const ValueTreeItem: import("styled-components").StyledComponent<"div", any, ValueTreeItemProps, never>;
export declare function stringifyElementId(elementId: FixtureElementId): string;
export {};
