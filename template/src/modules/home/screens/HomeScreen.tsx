/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Styles} from './HomeScreen.styles';
import {useNavigation} from '@react-navigation/native';
import {T_HomeNavigationType} from '../routes/HomeRouteTypes';

const HomeScreen = () => {
  const navigation: T_HomeNavigationType = useNavigation();
  return (
    <View style={Styles.container}>
      <Text>Welcome to RN boilerplate</Text>

      <View>
        <TouchableOpacity
          style={Styles.btnStyle}
          onPress={() => navigation.navigate('SecondScreen')}>
          <Text style={Styles.txtStyle}>Go To Second page</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default HomeScreen;
