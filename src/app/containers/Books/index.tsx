import React, { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createFilter } from 'react-search-input';
import { loadBooks } from '../../../store/actions/books';
import { Loader } from '../../components/Loader';
import { AppState } from '../../../store/configureStore';
import { Wrapper } from './components/Wrapper';
import { TitleWrapper } from './components/TitleWrapper';
import { Title } from './components/Title';
import { SwitcherModes } from '../SwitcherModesMobile';
import { SwitcherView } from '../SwitcherView';
import { BookGrid } from '../BookGrid';
import { BookList } from '../BookList';
import { SimpleModal } from '../../components/SimpleModal';
import { BookCard } from '../BookCard';
import { Search } from '../../components/Search';
import { useWindowSize } from '../../../hooks/useWindowSize';
import { useMode } from '../../../hooks/useMode';

const KEYS_TO_FILTERS = ['title', 'author', 'genre'];

export interface IBookState {
  image: string;
  title: string;
  author: string;
  description: string;
}

export const Books = () => {
  const { width } = useWindowSize();
  const { mode: themeMode } = useMode();
  const dispatch = useDispatch();
  const { loading, data } = useSelector((state: AppState) => state.books);
  const booksIds = data.allIds;
  const books = data.byId;
  const [switchMode, setSwitchMode] = useState('grid');
  const [open, setOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState<IBookState>({
    image: '',
    title: '',
    author: '',
    description: '',
  });
  const [searchText, setSearchText] = useState('');
  const transformedBooks = booksIds.map((bookId) => books[bookId]);
  const filteredBooks = transformedBooks.filter(createFilter(searchText, KEYS_TO_FILTERS));

  useEffect(() => {
    dispatch(loadBooks());
  }, []);

  const handleGridMode = useCallback(() => {
    setSwitchMode('grid');
  }, []);

  const handleListMode = useCallback(() => {
    setSwitchMode('list');
  }, []);

  const handleOpen = ({ image, title, author, description }: IBookState) => {
    setSelectedBook({
      image,
      title,
      author,
      description,
    });

    setOpen(true);
  };

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <Wrapper>
      {loading && <Loader />}
      {width && width < 768 && (
        <SwitcherModes />
      )}
      <TitleWrapper>
        <Title mode={themeMode}>Book Library</Title>
        <SwitcherView
          mode={switchMode}
          onGridMode={handleGridMode}
          onListMode={handleListMode}
        />
      </TitleWrapper>
      <Search mode={themeMode} onChange={setSearchText} />
      {switchMode === 'grid' ? (
        <BookGrid
          books={filteredBooks}
          handleOpen={handleOpen}
        />
      ) : (
        <BookList
          books={filteredBooks}
          handleOpen={handleOpen}
        />
      )}
      <SimpleModal
        open={open}
        handleClose={handleClose}
      >
        <BookCard
          image={selectedBook.image}
          title={selectedBook.title}
          author={selectedBook.author}
          description={selectedBook.description}
        />
      </SimpleModal>
    </Wrapper>
  );
};
