import React from 'react';
import { GroupedOptions } from '../../shared/groupedOptions.js';
type BaseOption = {
    value: string;
    label: string;
};
type Props<Option extends BaseOption> = {
    id?: string;
    testId?: string;
    options: Option[] | GroupedOptions<Option>[];
    value: string;
    color: string;
    height: number;
    padding: number;
    onChange: (newValue: Option) => unknown;
};
export declare function Select<Option extends BaseOption>({ id, testId, options, value, color, height, padding, onChange, }: Props<Option>): React.JSX.Element;
export {};
