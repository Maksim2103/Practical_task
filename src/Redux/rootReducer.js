import { combineReducers } from 'redux';
import articles from './articles/articles.reducer';
import usersReducer from './users/users.reducer';
import photosReducer from './photos/photos.reducer';

const rootReducer = combineReducers({
  articles,
  usersReducer,
  photosReducer,
});

export default rootReducer;
