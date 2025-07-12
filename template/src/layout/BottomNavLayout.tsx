import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {BottomTabLayoutList} from './LayoutTypes';
import HomeNavigator from '../modules/home/routes/HomeNavigator';
import PostNavigator from '../modules/post/routes/PostNavigator';
import {View} from 'react-native';
import {Icon} from '@rneui/base';

const Tab = createBottomTabNavigator<BottomTabLayoutList>();
/**
 * BottomTabLayout component that defines the bottom tab navigation structure.
 * It includes Home and Post navigators with custom icons.
 */
const BottomTabLayout = () => {
  const renderTabIcon = (routeName: string, focused: boolean) => {
    const color = focused ? 'blue' : 'grey';

    switch (routeName) {
      case 'HomeNavigator':
        return (
          <View>
            <Icon name="home" type="fontisto" size={25} color={color} />
          </View>
        );
      case 'PostNavigator':
        return (
          <View>
            <Icon
              name="nav-icon-list"
              type="fontisto"
              size={25}
              color={color}
            />
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <Tab.Navigator
      screenOptions={({route}) => {
        return {
          headerShown: false,
          tabBarIcon: ({focused}) => renderTabIcon(route.name, focused),
        };
      }}>
      <Tab.Screen
        name="HomeNavigator"
        component={HomeNavigator}
        options={{tabBarLabel: 'Home'}}
      />
      <Tab.Screen
        name="PostNavigator"
        component={PostNavigator}
        options={{tabBarLabel: 'Posts'}}
      />
    </Tab.Navigator>
  );
};

export default BottomTabLayout;
