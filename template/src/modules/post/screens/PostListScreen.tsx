/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../../hooks/useAppHook';
import {
  GetPostContent,
  GetPostLoadingContent,
} from '../redux/selectors/PostSelector';
import {Styles} from './PostListScreen.styles';
import {PostSearchExecute} from '../redux/action/PostActions';

const PostScreen = () => {
  const dispatch = useAppDispatch();
  const postListContent = useAppSelector(GetPostContent());
  const postLoadingContent = useAppSelector(GetPostLoadingContent());

  useEffect(() => {
    dispatch(PostSearchExecute());
  }, [dispatch]);

  return (
    <View style={Styles.Container}>
      {postLoadingContent ? (
        <Text>Loading</Text>
      ) : postListContent?.length > 0 ? (
        <Text>{postListContent[0].title}</Text>
      ) : (
        <Text>Welcome to RN boilerplate</Text>
      )}
    </View>
  );
};
export default PostScreen;
