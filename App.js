
import React from 'react';
import {
  View,
} from 'react-native';
import Home from './screens/Home';
import { NativeBaseProvider } from "native-base";

const App = () => {
  return (
    <NativeBaseProvider>
      <View>
        <Home />
      </View>
    </NativeBaseProvider>
  );
};

export default App;
