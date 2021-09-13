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
  StatusBar,
  StyleSheet,
  Text,

} from 'react-native';
import { Theme } from './src/utils';
import WaterTracking from './src/WaterTracking';

const App = () => {

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <WaterTracking />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: Theme.primary,
  }
});

export default App;
