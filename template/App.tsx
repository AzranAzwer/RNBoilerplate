/**
 * The main entry point of the React Native application.
 * Sets up Redux, navigation, status bar, and global Axios configuration.
 */

import React from 'react';
import {Provider} from 'react-redux';
import axios from 'axios';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';

import store from './src/setups/redux/Store';
import SetupAxios from './src/setups/axios/SetupAxios';
import AppLayout from './src/layout/AppLayout';

// Configure Axios with global settings
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
