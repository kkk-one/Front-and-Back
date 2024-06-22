import React from 'react';
type Props = {
    name: string;
    expanded: boolean;
    indentLevel: number;
    selected: boolean;
    onToggle: () => unknown;
};
export declare function FixtureDir({ name, expanded, indentLevel, selected, onToggle, }: Props): React.JSX.Element;
export {};
