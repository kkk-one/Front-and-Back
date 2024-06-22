import React from 'react';
import { RendererConfig } from 'react-cosmos-core';
type Props = {
    children: React.ReactNode;
    rendererConfig: RendererConfig;
};
export declare function DomRendererProvider({ children, rendererConfig }: Props): React.JSX.Element;
export {};
