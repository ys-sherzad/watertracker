import { Helpers } from "../utils";
import { ActionType, AppAction, State } from "./types";

export const initialState: State = {
    totalWaterDrunk: 0,
    target: 2500,
    selectedValue: 250
};

export const reducer = (state: State, action: AppAction) => {
    switch (action.type) {
        case ActionType.SET_WATER_TARGET:
            return {
                ...state,
                target: action.payload
            };
        case ActionType.SELECT_WATER_VALUE:
            return {
                ...state,
                selectedValue: action.payload,
            };
        case ActionType.INCREMENT:
            return {
                ...state,
                totalWaterDrunk: function () {
                    const total = state.totalWaterDrunk + state.selectedValue;
                    if (total > state.target) {
                        return state.target;
                    }
                    return total;
                }()
            };
        case ActionType.DECREMENT:
            return {
                ...state,
                totalWaterDrunk: function () {
                    const total = state.totalWaterDrunk - state.selectedValue;
                    if (total < 0) {
                        return 0;
                    }
                    return total;
                }()
            };
        default:
            return state;
    }
};