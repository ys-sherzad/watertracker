import { Action } from "./createAction";


export enum ActionType {
    SET_WATER_TARGET = 'set/target',
    SELECT_WATER_VALUE = 'select/value',
    INCREMENT = 'increment/value',
    DECREMENT = 'decrement/value',
    REHYDRATE = 'store/rehydrate'
}

export type SetTargetAction = Action<typeof ActionType.SET_WATER_TARGET, number>;
export type SelectWaterValueAction = Action<typeof ActionType.SELECT_WATER_VALUE, number>;
export type IncrementAction = Action<typeof ActionType.INCREMENT, undefined>;
export type DecrementAction = Action<typeof ActionType.DECREMENT, undefined>;
export type RehydrateAction = Action<typeof ActionType.REHYDRATE, State>;

export type AppAction =
    | SetTargetAction
    | SelectWaterValueAction
    | IncrementAction
    | DecrementAction
    | RehydrateAction;

export interface State {
    totalWaterDrunk: number;
    target: number;
    selectedIndex: number;
}





