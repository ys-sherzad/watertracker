import { State } from 'react-native-gesture-handler';
import { action, createAction } from 'typesafe-actions';
import * as ActionTypes from './action-types';

/**
 * Set water target
 * @param target number
 * @returns action
 */
// export const setWaterTarget = (target: number) => action(ActionTypes.SET_WATER_TARGET, { target });
export const setWaterTarget = createAction(ActionTypes.SET_WATER_TARGET)<{ target: number; }>();

/**
 * Select water level
 * @param selectedIndex number
 * @returns action
 */
// export const selectWaterValue = (selectedIndex: number) => action(ActionTypes.SELECT_WATER_VALUE, { selectedIndex });
export const selectWaterValue = createAction(ActionTypes.SELECT_WATER_VALUE)<{ selectedIndex: number; }>();


/**
 * Increment water
 * @returns action
 */
// export const increment = () => action(ActionTypes.INCREMENT);
export const increment = createAction(ActionTypes.INCREMENT)();


/**
 * Decrement water
 * @returns action
 */
// export const decrement = () => action(ActionTypes.DECREMENT);
export const decrement = createAction(ActionTypes.DECREMENT)();


/**
 * Reydrate store
 * @param persistedState State
 * @returns action
 */
// export const rehydrate = (persistedState: State) => action(ActionTypes.REHYDRATE, { persistedState });
export const rehydrate = createAction(ActionTypes.REHYDRATE)<{ persistedState: State; }>();
