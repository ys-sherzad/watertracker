import { levels } from "./data";
import { ActionType, AppAction, State } from "./types";

export const initialState: State = {
    totalWaterDrunk: 0,
    target: 3500,
    selectedValueIndex: 1
};

export const reducer = (state: State, action: AppAction) => {
    switch (action.type) {
        case ActionType.SET_WATER_TARGET:
            if (action.payload < state.totalWaterDrunk) {
                return {
                    ...state,
                    target: action.payload,
                    totalWaterDrunk: action.payload
                };
            }
            return {
                ...state,
                target: action.payload
            };
        case ActionType.SELECT_WATER_VALUE:
            return {
                ...state,
                selectedValueIndex: action.payload,
            };
        case ActionType.INCREMENT:
            return {
                ...state,
                totalWaterDrunk: function () {
                    const total = state.totalWaterDrunk + levels[state.selectedValueIndex];
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
                    const total = state.totalWaterDrunk - levels[state.selectedValueIndex];
                    if (total < 0) {
                        return 0;
                    }
                    return total;
                }()
            };
        case ActionType.REHYDRATE:
            return action.payload;
        default:
            return state;
    }
};