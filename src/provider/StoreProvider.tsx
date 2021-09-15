import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import useStartup from '../hooks/useStartup';
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
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size='large' color='#088ECF' />
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
