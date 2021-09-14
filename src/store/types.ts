import { Action } from "./createAction";


export enum ActionType {
    SET_WATER_TARGET = 'set/target'
}

type SetTargetAction = Action<typeof ActionType.SET_WATER_TARGET, number>;

export type AppAction = SetTargetAction;

export interface State {
    totalWaterDrunk: number;
    target: number;
}





