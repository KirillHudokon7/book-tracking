import React from 'react';
import { BookItem } from './BookItem';
import { IBookData } from "../../../store/actionTypes/books";
import { IBookState } from "../Books";

interface IBookGridProps {
  books: IBookData[];
  handleOpen: (book: IBookState) => void;
}

export const BookList: React.FC<IBookGridProps> = ({ books, handleOpen }) => {
  return (
    <div>
      {books.map((book) => {
        return (
          <BookItem
            key={book.title}
            image={book.image}
            title={book.title}
            author={book.author}
            description={book.description}
            handleOpen={handleOpen}
          />
        )
      })}
    </div>
  );
};
