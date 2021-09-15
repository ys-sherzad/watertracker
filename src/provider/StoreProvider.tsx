import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import useStartup from '../hooks/useStartup';
import { Theme } from '../utils';
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
    const { isLoading, store, dispatch } = useStartup();

    if (isLoading) {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: Theme.primary
            }}>
                <ActivityIndicator size='large' color='#fff' />
            </View>
        );
    }

    return (
        <Provider value={{ store, dispatch }}>
            {children}
        </Provider>
    );
};

export default StoreProvider;
