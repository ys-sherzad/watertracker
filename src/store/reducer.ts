import { Helpers } from "../utils";
import { ActionType, AppAction, State } from "./types";

export const initialState: State = {
    totalWaterDrunk: 0,
    target: 0,
};

export const reducer = (state: State, action: AppAction) => {
    switch (action.type) {
        case ActionType.SET_WATER_TARGET:
            return {
                ...state,
                target: Helpers.mililiterToLiter(action.payload)
            };
        default:
            return state;
    }
};