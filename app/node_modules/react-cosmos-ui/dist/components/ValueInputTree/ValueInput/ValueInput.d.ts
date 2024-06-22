import React from 'react';
import { PrimitiveData } from 'react-cosmos-core';
import { LeafValue } from '../shared.js';
type Props = {
    value: LeafValue;
    name: string;
    id: string;
    indentLevel: number;
    onChange: (data: PrimitiveData) => unknown;
};
export declare function ValueInput({ value, name, id, indentLevel, onChange }: Props): React.JSX.Element;
export {};
