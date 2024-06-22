import React from 'react';
type Props = {
    children: React.ReactNode;
    width: number;
    height: number;
};
export declare function Viewport({ children, width, height }: Props): React.ReactNode;
export declare namespace Viewport {
    var cosmosCapture: boolean;
}
export {};
