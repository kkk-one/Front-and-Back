import React from 'react';
type Props = {
    name: string;
    childrenText: string;
    disabled: boolean;
    expanded: boolean;
    indentLevel: number;
    onToggle: () => unknown;
};
export declare function ValueInputDir({ name, childrenText, disabled, expanded, indentLevel, onToggle, }: Props): React.JSX.Element;
export {};
