import { State } from 'react-native-gesture-handler';
import { createAction } from 'typesafe-actions';
import * as ActionTypes from './action-types';

/**
 * Set water target
 * @param target number
 * @returns action
 */
export const setWaterTarget = createAction(ActionTypes.SET_WATER_TARGET)<{ target: number; }>();

/**
 * Select water level
 * @param selectedIndex number
 * @returns action
 */
export const selectWaterValue = createAction(ActionTypes.SELECT_WATER_VALUE)<{ selectedIndex: number; }>();


/**
 * Increment water
 * @returns action
 */
export const increment = createAction(ActionTypes.INCREMENT)();


/**
 * Decrement water
 * @returns action
 */
export const decrement = createAction(ActionTypes.DECREMENT)();


/**
 * Reydrate store
 * @param persistedState State
 * @returns action
 */
export const rehydrate = createAction(ActionTypes.REHYDRATE)<{ persistedState: State; }>();
