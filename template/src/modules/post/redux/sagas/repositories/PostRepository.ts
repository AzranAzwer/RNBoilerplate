import axios from 'axios';
import {call, put} from 'redux-saga/effects';
import {T_PostActionTypes} from '../../action/PostActionTypes';

export function* PostRepositoryExecute() {
  try {
    const {data} = yield call(axios.get, '/posts');
    yield put({
      type: T_PostActionTypes.POST_SEARCH_SUCCESS,
      payload: data,
    });
  } catch (error) {
    yield put({type: T_PostActionTypes.POST_SEARCH_FAILED});
  }
}
