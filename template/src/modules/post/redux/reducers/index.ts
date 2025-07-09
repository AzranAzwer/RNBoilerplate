import {combineReducers} from 'redux';
import PostReducer from './PostReducer';

const PostReducers = combineReducers({
  post: PostReducer,
});

export default PostReducers;
