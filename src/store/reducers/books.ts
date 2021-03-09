import {
  LOAD_BOOKS_PENDING,
  LOAD_BOOKS_FULFILLED,
  LOAD_BOOKS_REJECTED,
  IBooksState, LoadBooksActionTypes,
} from '../actionTypes/books';

export const initialState: IBooksState = {
  data: {
    byId : {},
    allIds : [],
  },
  loading: false,
  error: null,
};

export const booksReducer = (state = initialState, action: LoadBooksActionTypes): IBooksState => {
  switch(action.type) {
    case LOAD_BOOKS_PENDING:
      return {
        ...state,
        loading: true,
        error: null,
        data: {
          byId : {},
          allIds : [],
        },
      };
    case LOAD_BOOKS_FULFILLED:
      const filesById = action.payload.reduce((acc, curr) => {
        acc[curr.title] = curr;

        return acc;
      }, {});

      const allFiles = Object.keys(filesById);

      return {
        ...state,
        data: {
          byId: filesById,
          allIds: allFiles,
        },
        loading: false,
      };
    case LOAD_BOOKS_REJECTED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
