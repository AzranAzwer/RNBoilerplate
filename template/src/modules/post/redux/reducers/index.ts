import {combineReducers} from 'redux';
import postSlice from './PostSlicer';

const PostReducers = combineReducers({
  post: postSlice.reducer,
});

export default PostReducers;
