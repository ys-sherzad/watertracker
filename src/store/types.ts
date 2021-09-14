import { Action } from "./createAction";


export enum ActionType {
    SET_WATER_TARGET = 'set/target',
    SELECT_WATER_VALUE = 'select/value',
    INCREMENT = 'increment/value',
    DECREMENT = 'decrement/value'
}

type SetTargetAction = Action<typeof ActionType.SET_WATER_TARGET, number>;
type SelectWaterValueAction = Action<typeof ActionType.SELECT_WATER_VALUE, number>;
type Increment = Action<typeof ActionType.INCREMENT, undefined>;
type Decrement = Action<typeof ActionType.DECREMENT, undefined>;

export type AppAction =
    | SetTargetAction
    | SelectWaterValueAction
    | Increment
    | Decrement;

export interface State {
    totalWaterDrunk: number;
    target: number;
    selectedValue: number;
}





