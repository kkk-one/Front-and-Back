import { PropsFixtureState, PropsFixtureStateItem, PropsFixtureStateRenderKey } from './propsTypes.js';
import { FixtureDecoratorId, FixtureElementId, FixtureStateValues } from './types.js';
export declare const DEFAULT_RENDER_KEY: PropsFixtureStateRenderKey;
export declare function filterPropsFixtureState(propsFs: PropsFixtureState | undefined, decoratorId: FixtureDecoratorId): PropsFixtureState;
export declare function findPropsFixtureStateItem(propsFs: PropsFixtureState | undefined, elementId: FixtureElementId): void | PropsFixtureStateItem;
type CreatePropsFixtureStateArgs = {
    propsFs: PropsFixtureState | undefined;
    elementId: FixtureElementId;
    values: FixtureStateValues;
    componentName: string;
};
export declare function createPropsFixtureStateItem({ propsFs, elementId, values, componentName, }: CreatePropsFixtureStateArgs): {
    elementId: FixtureElementId;
    values: FixtureStateValues;
    renderKey: number;
    componentName: string;
}[];
type ResetPropsFixtureStateItemArgs = {
    propsFs: PropsFixtureState | undefined;
    elementId: FixtureElementId;
    values: FixtureStateValues;
};
export declare function resetPropsFixtureStateItem({ propsFs, elementId, values, }: ResetPropsFixtureStateItemArgs): PropsFixtureStateItem[];
type UpdatePropsFixtureStateItemArgs = {
    propsFs: PropsFixtureState | undefined;
    elementId: FixtureElementId;
    values: FixtureStateValues;
};
export declare function updatePropsFixtureStateItem({ propsFs, elementId, values, }: UpdatePropsFixtureStateItemArgs): PropsFixtureStateItem[];
export declare function removePropsFixtureStateItem(propsFs: PropsFixtureState | undefined, elementId: FixtureElementId): PropsFixtureStateItem[];
export {};
