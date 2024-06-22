import React from 'react';
import { SvgChildren } from './BaseSvg.js';
export type IconProps = {
    size?: number | string;
    strokeWidth?: number;
};
type Props = IconProps & {
    children: SvgChildren;
};
export declare function Icon({ children, size, strokeWidth }: Props): React.JSX.Element;
export {};
