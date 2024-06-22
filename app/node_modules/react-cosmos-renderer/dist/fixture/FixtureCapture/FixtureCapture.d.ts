import React from 'react';
import { FixtureDecoratorId } from 'react-cosmos-core';
type Props = {
    children: React.ReactNode;
    decoratorId: FixtureDecoratorId;
};
export declare function FixtureCapture({ children, decoratorId }: Props): React.ReactNode;
export {};
