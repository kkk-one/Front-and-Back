import { MutableRefObject, ReactNode } from 'react';
import { FixtureDecoratorId } from 'react-cosmos-core';
import { ElRefs } from './shared.js';
export declare function useFixtureClassState(fixture: ReactNode, decoratorId: FixtureDecoratorId, elRefs: MutableRefObject<ElRefs>): ReactNode;
