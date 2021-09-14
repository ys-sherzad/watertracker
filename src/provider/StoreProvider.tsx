import React, { useReducer } from 'react';
import { initialState, reducer } from '../store/reducer';
import { Provider } from './StoreContext';

interface StoreProviderProps {
    children: React.ReactNode;
}

/**
 * A store provider to wrap the whole app
 */
const StoreProvider = ({
    children
}: StoreProviderProps) => {
    const [store, dispatch] = useReducer(reducer, initialState);
    return (
        <Provider value={{ store, dispatch }}>
            {children}
        </Provider>
    );
};

export default StoreProvider;
