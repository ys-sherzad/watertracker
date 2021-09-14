import { createAction } from "./createAction";
import { ActionType, AppAction } from "./types";

/**
 * @param value number
 * @returns action
 */
export const setWaterTarget = (value: number): AppAction =>
    createAction(ActionType.SET_WATER_TARGET, value);