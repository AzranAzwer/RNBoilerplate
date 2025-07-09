/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Provider} from 'react-redux';
import axios from 'axios';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';

import store from './src/setups/redux/Store';
import SetupAxios from './src/setups/axios/SetupAxios';
import AppLayout from './src/layout/AppLayout';

SetupAxios(axios);
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar barStyle={'dark-content'} backgroundColor="#fff" />
        <AppLayout />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
