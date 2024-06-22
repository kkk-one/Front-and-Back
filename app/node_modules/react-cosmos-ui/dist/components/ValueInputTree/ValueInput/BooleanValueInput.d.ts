import React from 'react';
type Props = {
    id: string;
    name: string;
    data: boolean;
    onChange: (data: boolean) => unknown;
};
export declare function BooleanValueInput({ id, name, data, onChange }: Props): React.JSX.Element;
export {};
