import React from 'react';
export type NumberInputStyles = {
    focusedColor: string;
    focusedBg: string;
    focusedBoxShadow: string;
};
type Props = {
    id?: string;
    value: number;
    minValue?: number;
    maxValue?: number;
    styles: NumberInputStyles;
    onChange: (newValue: number) => unknown;
};
export declare function NumberInput({ id, value, minValue, maxValue, styles, onChange, }: Props): React.JSX.Element;
export {};
