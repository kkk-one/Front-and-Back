import { Dispatch, SetStateAction } from 'react-cosmos-core';
type Opts<T> = {
    defaultValue: T;
};
export declare function useValue<T>(inputName: string, opts: Opts<T>): [T, Dispatch<SetStateAction<T>>];
export {};
