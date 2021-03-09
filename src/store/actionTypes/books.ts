export interface IBookData {
  image: string;
  title: string;
  author: string;
  genre: string;
  description: string;
}

export interface IBooksState {
  data: {
    byId : {} | IBookData,
    allIds : Array<string>,
  };
  loading: boolean;
  error: null | object,
}

export const LOAD_BOOKS_PENDING = 'LOAD_BOOKS_PENDING';
export const LOAD_BOOKS_FULFILLED = 'LOAD_BOOKS_FULFILLED';
export const LOAD_BOOKS_REJECTED = 'LOAD_BOOKS_REJECTED';

interface LoadBooksAction {
  type: typeof LOAD_BOOKS_PENDING;
}

interface LoadBooksActionFulfilled {
  type: typeof LOAD_BOOKS_FULFILLED;
  payload: IBookData[];
}

interface LoadBooksActionRejected {
  type: typeof LOAD_BOOKS_REJECTED;
  payload: object;
}

export type LoadBooksActionTypes = LoadBooksAction | LoadBooksActionFulfilled | LoadBooksActionRejected;
