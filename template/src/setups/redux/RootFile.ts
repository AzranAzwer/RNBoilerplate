import {combineReducers} from 'redux';
import {all} from 'redux-saga/effects';
import {PostReducers, PostSaga} from '../../modules/post/redux';

export const rootReducer = combineReducers({
  post: PostReducers,
});

export function* rootSaga() {
  yield all([...PostSaga]);
}
