import React from 'react';
import { Wrapper } from './components/Wrapper';
import { Image } from './components/Image';
import { Title } from '../components/Title';
import { Author } from '../components/Author';
import { useMode } from '../../../../hooks/useMode';
import { IBookState } from '../../Books';

interface IBookItem extends IBookState{
  handleOpen: (book:IBookState ) => void;
}

export const BookItem: React.FC<IBookItem> = ({ image, title, author, description, handleOpen }) => {
  const { mode } = useMode();

  const handleBookOpen = () => {
    handleOpen({
      image,
      title,
      author,
      description,
    });
  };

  return (
    <Wrapper onClick={handleBookOpen}>
      <Image src={image} alt="Book image"/>
      <div>
        <Title mode={mode}>{title}</Title>
        <Author>{author}</Author>
      </div>
    </Wrapper>
  );
};
