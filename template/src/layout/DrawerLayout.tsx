import React from 'react';
import {DrawerLayoutList} from './LayoutTypes';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeNavigator from '../modules/home/routes/HomeNavigator';
import PostNavigator from '../modules/post/routes/PostNavigator';

const Drawer = createDrawerNavigator<DrawerLayoutList>();
const DrawerLayout = () => {
  return (
    <Drawer.Navigator
    // screenOptions={{header: () => null, headerShown: false}}
    >
      <Drawer.Screen
        name="Home"
        component={HomeNavigator}
        // options={{header: () => null, headerShown: false}}
      />
      <Drawer.Screen name="Post" component={PostNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerLayout;
