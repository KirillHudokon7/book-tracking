import { combineReducers } from 'redux';
import { booksReducer } from './books';
import { modeReducer } from './mode';

export default combineReducers({
  books: booksReducer,
  mode: modeReducer,
});
