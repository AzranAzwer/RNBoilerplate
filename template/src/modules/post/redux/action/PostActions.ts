import {Dispatch} from 'redux';
import {PostDispatchTypes, T_PostActionTypes} from './PostActionTypes';

export const getPostList =
  () => async (dispatch: Dispatch<PostDispatchTypes>) => {
    dispatch({type: T_PostActionTypes.POST_SEARCH_EXECUTE});
  };
