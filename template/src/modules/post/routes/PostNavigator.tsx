import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {PostRouteList} from './PostRouteTypes';
import PostScreen from '../screens/PostListScreen';

const PostStack = createStackNavigator<PostRouteList>();
/**
 * PostNavigator component that defines the stack navigation structure for the post module.
 * It includes PostScreen with initial route set to PostScreen.
 */
const PostNavigator = () => {
  const initialRoute: keyof PostRouteList = 'PostScreen';
  return (
    <PostStack.Navigator
      initialRouteName={initialRoute}
      screenOptions={() => ({
        headerStyle: {},
        unmountOnBlur: true,
      })}>
      <PostStack.Screen name="PostScreen" component={PostScreen} />
    </PostStack.Navigator>
  );
};

export default PostNavigator;
