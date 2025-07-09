import {
  I_PostPayloadType,
  PostDispatchTypes,
  T_PostActionTypes,
} from '../action/PostActionTypes';

export interface I_PostState {
  isLoading: boolean;
  list: I_PostPayloadType[];
}

const defaultState: I_PostState = {
  isLoading: false,
  list: [],
};

const reducer = (
  state: I_PostState = defaultState,
  action: PostDispatchTypes,
): I_PostState => {
  switch (action.type) {
    case T_PostActionTypes.POST_SEARCH_EXECUTE: {
      return {...state, isLoading: true, list: []};
    }

    case T_PostActionTypes.POST_SEARCH_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        list: action.payload,
      };
    }

    case T_PostActionTypes.POST_SEARCH_FAILED: {
      return {...state, isLoading: false, list: []};
    }

    default:
      return state;
  }
};

export default reducer;
