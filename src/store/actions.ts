import { createAction } from "./createAction";
import {
    ActionType,
    DecrementAction,
    IncrementAction,
    RehydrateAction,
    SelectWaterValueAction,
    SetTargetAction,
    State
} from "./types";

/**
 * @param value number
 * @returns action
 */
export const setWaterTarget = (value: number): SetTargetAction =>
    createAction(ActionType.SET_WATER_TARGET, value);

/**
 * @param value number
 * @returns action
 */
export const selectWaterValue = (value: number): SelectWaterValueAction =>
    createAction(ActionType.SELECT_WATER_VALUE, value);


// TODO: payload should be optional
// passing undefined at the moment   
export const increment = (): IncrementAction =>
    createAction(ActionType.INCREMENT, undefined);

export const decrement = (): DecrementAction =>
    createAction(ActionType.DECREMENT, undefined);

export const rehydrate = (state: State): RehydrateAction =>
    createAction(ActionType.REHYDRATE, state);