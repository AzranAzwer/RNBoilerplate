import store from './Store';

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default interface I_BaseActionType<T> {
  type: T;
}
