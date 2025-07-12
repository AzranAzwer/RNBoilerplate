import {call, put} from 'redux-saga/effects';
import {PostSearchFailed, PostSearchSuccess} from '../../action/PostActions';
import {getPostListCrud} from '../../crud/PostCrud';

export function* PostRepositoryExecute() {
  try {
    const {data} = yield call(getPostListCrud);
    yield put(PostSearchSuccess(data));
  } catch (error) {
    yield put(PostSearchFailed());
  }
}
