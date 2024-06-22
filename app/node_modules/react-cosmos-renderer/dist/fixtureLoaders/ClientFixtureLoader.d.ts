import React from 'react';
import { ReactDecorator, UserModuleWrappers } from 'react-cosmos-core';
type Props = {
    moduleWrappers: UserModuleWrappers;
    globalDecorators?: ReactDecorator[];
    renderMessage?: (msg: string) => React.ReactNode;
};
export declare function ClientFixtureLoader({ moduleWrappers, globalDecorators, renderMessage, }: Props): React.JSX.Element;
export {};
