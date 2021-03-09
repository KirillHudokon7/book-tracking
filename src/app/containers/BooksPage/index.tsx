import React from 'react';
import { Wrapper } from './components/Wrapper';
import { Books } from '../Books';
import { Drawer } from '../Drawer';
import { useWindowSize } from '../../../hooks/useWindowSize';
import { useMode } from '../../../hooks/useMode';

const BooksPage = () => {
  const { width } = useWindowSize();
  const { mode } = useMode();

  return (
    <Wrapper mode={mode}>
      {width && width >= 768 && (
        <Drawer />
      )}
      <Books />
    </Wrapper>
  );
};

export default BooksPage;
