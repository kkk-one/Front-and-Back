import { FixtureState } from './types.js';
export type FixtureStateUpdater<T> = (prevState: T | undefined) => T;
export type FixtureStateChange<T> = T | FixtureStateUpdater<T>;
export declare function fixtureStateByName<T>(fixtureState: FixtureState, name: string): T | undefined;
export declare function updateFixtureState<T>(fixtureState: FixtureState, name: string, change: FixtureStateChange<T>): FixtureState;
export declare function applyFixtureStateChange<T>(prevState: T | undefined, change: FixtureStateChange<T>): T;
