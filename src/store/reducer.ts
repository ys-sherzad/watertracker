import { levels } from "./data";
import { State } from "./types";
import { ActionType, getType } from 'typesafe-actions';
import * as Actions from './actions';

export type AppAction = ActionType<typeof Actions>;

export const initialState: State = {
    totalWaterDrunk: 0,
    target: 3500,
    selectedIndex: 1
};

export const reducer = (state: State, action: AppAction) => {
    switch (action.type) {
        case getType(Actions.setWaterTarget):
            const { target } = action.payload;
            if (target < state.totalWaterDrunk) {
                return {
                    ...state,
                    target,
                    totalWaterDrunk: target
                };
            }
            return {
                ...state,
                target
            };
        case getType(Actions.selectWaterValue):
            const { selectedIndex } = action.payload;
            return {
                ...state,
                selectedIndex
            };
        case getType(Actions.increment):
            return {
                ...state,
                totalWaterDrunk: function () {
                    const total = state.totalWaterDrunk + levels[state.selectedIndex];
                    if (total > state.target) {
                        return state.target;
                    }
                    return total;
                }()
            };
        case getType(Actions.decrement):
            return {
                ...state,
                totalWaterDrunk: function () {
                    const total = state.totalWaterDrunk - levels[state.selectedIndex];
                    if (total < 0) {
                        return 0;
                    }
                    return total;
                }()
            };
        case getType(Actions.rehydrate):
            const { persistedState } = action.payload;
            return { ...state, ...persistedState };
        default:
            return state;
    }
};