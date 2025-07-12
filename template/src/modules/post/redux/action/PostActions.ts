import {createAction} from '@reduxjs/toolkit';

export enum T_PostActionTypes {
  POST_SEARCH_EXECUTE = '@@POST_SEARCH_EXECUTE@@',
  POST_SEARCH_SUCCESS = '@@POST_SEARCH_SUCCESS@@',
  POST_SEARCH_FAILED = '@@POST_SEARCH_FAILED@@',
}

export interface I_PostPayloadType {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const PostSearchExecute = createAction(
  T_PostActionTypes.POST_SEARCH_EXECUTE,
);
export const PostSearchSuccess = createAction<I_PostPayloadType[]>(
  T_PostActionTypes.POST_SEARCH_SUCCESS,
);
export const PostSearchFailed = createAction(
  T_PostActionTypes.POST_SEARCH_FAILED,
);
