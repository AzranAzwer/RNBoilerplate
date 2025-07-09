import I_BaseActionType from '../../../../setups/redux/Types';

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

interface DT_PostSearchExecute
  extends I_BaseActionType<T_PostActionTypes.POST_SEARCH_EXECUTE> {}

interface DT_PostSearchSuccess
  extends I_BaseActionType<T_PostActionTypes.POST_SEARCH_SUCCESS> {
  payload: I_PostPayloadType[];
}

interface DT_PostSearchFailed
  extends I_BaseActionType<T_PostActionTypes.POST_SEARCH_FAILED> {}

export type PostDispatchTypes =
  | DT_PostSearchExecute
  | DT_PostSearchSuccess
  | DT_PostSearchFailed;
