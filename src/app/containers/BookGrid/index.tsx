import React from 'react';
import { BookItem } from './BookItem';
import { BookWrapper } from './components/BookWrapper';
import { IBookData } from '../../../store/actionTypes/books';
import { IBookState } from '../Books';

interface IBookGridProps {
  books: IBookData[];
  handleOpen: (book: IBookState) => void;
}

export const BookGrid: React.FC<IBookGridProps> = ({ books, handleOpen }) => {
  return (
    <BookWrapper>
      {books.map((book) => {
        return (
          <BookItem
            key={book.title}
            image={book.image}
            title={book.title}
            author={book.author}
            genre={book.genre}
            description={book.description}
            handleOpen={handleOpen}
          />
        )
      })}
    </BookWrapper>
  );
};
