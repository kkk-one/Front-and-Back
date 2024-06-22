import { ClassStateFixtureState, ClassStateFixtureStateItem } from './classStateTypes.js';
import { FixtureDecoratorId, FixtureElementId, FixtureStateValues } from './types.js';
export declare function filterClassStateFixtureState(classStateFs: ClassStateFixtureState | undefined, decoratorId: FixtureDecoratorId): ClassStateFixtureState;
export declare function findClassStateFixtureStateItem(classStateFs: ClassStateFixtureState | undefined, elementId: FixtureElementId): void | ClassStateFixtureStateItem;
type CreateClassStateFixtureStateArgs = {
    classStateFs: ClassStateFixtureState | undefined;
    elementId: FixtureElementId;
    values: FixtureStateValues;
    componentName: string;
};
export declare function createClassStateFixtureStateItem({ classStateFs, elementId, values, componentName, }: CreateClassStateFixtureStateArgs): {
    elementId: FixtureElementId;
    values: FixtureStateValues;
    componentName: string;
}[];
type UpdateClassStateFixtureStateArgs = {
    classStateFs: ClassStateFixtureState | undefined;
    elementId: FixtureElementId;
    values: FixtureStateValues;
};
export declare function updateClassStateFixtureStateItem({ classStateFs, elementId, values, }: UpdateClassStateFixtureStateArgs): ClassStateFixtureStateItem[];
export declare function removeClassStateFixtureStateItem(classStateFs: ClassStateFixtureState | undefined, elementId: FixtureElementId): ClassStateFixtureStateItem[];
export {};
