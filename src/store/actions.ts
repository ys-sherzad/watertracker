import { createAction } from "./createAction";
import { ActionType, AppAction, State } from "./types";

/**
 * @param value number
 * @returns action
 */
export const setWaterTarget = (value: number): AppAction =>
    createAction(ActionType.SET_WATER_TARGET, value);

/**
 * @param value number
 * @returns action
 */
export const selectWaterValue = (value: number): AppAction =>
    createAction(ActionType.SELECT_WATER_VALUE, value);


// TODO: payload should be optional
// passing undefined at the moment   
export const increment = (): AppAction =>
    createAction(ActionType.INCREMENT, undefined);

export const decrement = (): AppAction =>
    createAction(ActionType.DECREMENT, undefined);

export const rehydrate = (state: State): AppAction =>
    createAction(ActionType.REHYDRATE, state);