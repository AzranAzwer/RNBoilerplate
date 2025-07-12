import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeRouteList} from './HomeRouteTypes';
import HomeScreen from '../screens/HomeScreen';
import SecondScreen from '../screens/SecondScreen';

const HomeStack = createStackNavigator<HomeRouteList>();

/**
 * HomeNavigator component that defines the stack navigation structure for the home module.
 * It includes HomeScreen and SecondScreen with initial route set to HomeScreen.
 */
const HomeNavigator = () => {
  const initialRoute: keyof HomeRouteList = 'HomeScreen';
  return (
    <HomeStack.Navigator
      initialRouteName={initialRoute}
      screenOptions={() => ({
        headerStyle: {},
        unmountOnBlur: true,
      })}>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
      <HomeStack.Screen name="SecondScreen" component={SecondScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
