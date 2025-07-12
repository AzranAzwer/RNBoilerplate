import {takeLatest} from 'redux-saga/effects';
import {PostSearchExecute} from '../action/PostActions';
import {PostRepositoryExecute} from './repositories/PostRepository';

export function* PostSearchExecuteEffect(): Generator {
  yield takeLatest(PostSearchExecute.type, PostRepositoryExecute);
}
