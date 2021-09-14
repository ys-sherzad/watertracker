/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { Theme } from './src/utils';
import WaterTracking from './src/WaterTracking';
import StoreProvider from './src/provider/StoreProvider';

const App = () => {

  return (
    <StoreProvider>
      <SafeAreaView style={styles.safeAreaView}>
        <WaterTracking />
      </SafeAreaView>
    </StoreProvider>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: Theme.primary,
  }
});

export default App;
