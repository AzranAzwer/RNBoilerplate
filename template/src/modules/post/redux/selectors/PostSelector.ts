import {createSelector} from '@reduxjs/toolkit';
import {I_PostState} from '../reducers/PostReducer';
import {RootState} from '../../../../setups/redux/Types';

export const GetPostContent = () =>
  createSelector(
    (state: RootState) => state.post.post,
    (post: I_PostState) => post.list,
  );

export const GetPostLoadingContent = () =>
  createSelector(
    (state: RootState) => state.post.post,
    (post: I_PostState) => post.isLoading,
  );
