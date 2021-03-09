import React from 'react';
import { Wrapper } from './components/Wrapper';
import { Image } from './components/Image';
import { Title } from './components/Title';
import { Author } from './components/Author';
import { Description } from './components/Description';

interface IBookCardProps {
  image: string;
  title: string;
  author: string;
  description: string;
}

export const BookCard: React.FC<IBookCardProps> = ({ image, title, author, description }) => {
  return (
    <Wrapper>
      <Image src={image} alt="Book image" />
      <Title>{title}</Title>
      <Author>{author}</Author>
      <Description>{description}</Description>
    </Wrapper>
  );
};
