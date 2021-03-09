import {
  LOAD_BOOKS_PENDING, LOAD_BOOKS_FULFILLED, LOAD_BOOKS_REJECTED,
} from '../actionTypes/books';
import { books } from '../config';

export const loadBooks = () => async (dispatch) => {
  try {
    dispatch({ type: LOAD_BOOKS_PENDING });

    const booksData = {
      data: books,
    };

    dispatch({ type: LOAD_BOOKS_FULFILLED, payload: booksData.data });
  } catch (error) {
    dispatch({ type: LOAD_BOOKS_REJECTED, payload: error });
  }
};
