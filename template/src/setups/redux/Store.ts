import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import {rootReducer, rootSaga} from './RootFile';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({thunk: true}).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
