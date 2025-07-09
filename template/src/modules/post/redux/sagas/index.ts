import {fork} from 'redux-saga/effects';
import {PostSearchExecuteEffect} from './PostSaga';

export default [fork(PostSearchExecuteEffect)];
