import React, { useEffect, useReducer, useState } from 'react';
import { initialState, reducer } from '../store/reducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { rehydrate } from '../store/actions';

const STORE_KEY = 'persisted:store';

const useStartup = () => {
    const [store, dispatch] = useReducer(reducer, initialState);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const rehydrateStore = async () => {
            const store = await AsyncStorage.getItem(STORE_KEY);
            if (store) {
                dispatch(rehydrate({ persistedState: JSON.parse(store) }));
            }
            setIsLoading(false);
        };

        rehydrateStore();
    }, []);

    useEffect(() => {
        if (JSON.stringify(store) !== JSON.stringify(initialState)) {
            AsyncStorage.setItem(STORE_KEY, JSON.stringify(store));
        }
    }, [JSON.stringify(store)]);

    return { isLoading, store, dispatch };
};

export default useStartup;

