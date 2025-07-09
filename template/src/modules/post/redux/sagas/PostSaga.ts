import {put, takeLatest} from 'redux-saga/effects';
import {T_PostActionTypes} from '../action/PostActionTypes';
import {PostRepositoryExecute} from './repositories/PostRepository';

export function* PostSearchExecuteEffect() {
  try {
    yield takeLatest(
      T_PostActionTypes.POST_SEARCH_EXECUTE,
      PostRepositoryExecute,
    );
  } catch (e) {
    yield put({type: T_PostActionTypes.POST_SEARCH_FAILED});
  }
}
