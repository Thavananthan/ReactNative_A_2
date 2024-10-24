import React from 'react';
import AppStack from './src/navigation/AppStack';
import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import store from './src/redux/store';

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <AppStack />
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
