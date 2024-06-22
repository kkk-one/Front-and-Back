import { Dispatch, SetStateAction } from 'react-cosmos-core';
export declare function useFixtureInput<T>(inputName: string, defaultValue: T): [T, Dispatch<SetStateAction<T>>];
