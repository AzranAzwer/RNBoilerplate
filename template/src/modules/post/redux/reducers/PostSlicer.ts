import {createSlice} from '@reduxjs/toolkit';
import {
  I_PostPayloadType,
  PostSearchExecute,
  PostSearchFailed,
  PostSearchSuccess,
} from '../action/PostActions';

export interface I_PostState {
  isLoading: boolean;
  list: I_PostPayloadType[];
}

const defaultState: I_PostState = {
  isLoading: false,
  list: [],
};

const postSlice = createSlice({
  name: 'post',
  initialState: defaultState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(PostSearchExecute, state => {
      state.isLoading = true;
      state.list = [];
    });
    builder.addCase(PostSearchSuccess, (state, action) => {
      state.isLoading = false;
      state.list = action.payload;
    });

    builder.addCase(PostSearchFailed, state => {
      state.isLoading = false;
      state.list = [];
    });
  },
});

export default postSlice;
