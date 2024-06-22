import { FixtureStateChange } from 'react-cosmos-core';
export declare function useFixtureState<T>(name: string): readonly [T | undefined, (change: FixtureStateChange<T>) => void];
