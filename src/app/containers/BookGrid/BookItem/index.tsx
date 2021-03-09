import React from 'react';
import { Wrapper } from './components/Wrapper';
import { ImageWrapper } from './components/ImageWrapper';
import { Image } from './components/Image';
import { Title } from './components/Title';
import { Author } from './components/Author';
import { Genre } from './components/Genre';
import { useMode } from '../../../../hooks/useMode';
import { IBookState } from '../../Books';

interface IBookItem extends IBookState{
  genre: string;
  handleOpen: (book:IBookState ) => void;
}

export const BookItem: React.FC<IBookItem> = ({ image, title, author, genre, description, handleOpen }) => {
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
      <ImageWrapper>
        <Image
          src={image}
          alt="Book image"
        />
        <Genre mode={mode}>{genre}</Genre>
      </ImageWrapper>
      <Title mode={mode}>{title}</Title>
      <Author>{author}</Author>
    </Wrapper>
  );
};
