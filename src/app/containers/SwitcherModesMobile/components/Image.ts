import styled from 'styled-components';

interface ImageProps {
  readonly mode: string;
}

export const Image = styled.img<ImageProps>`
  background-color: ${(props) => props.mode === 'dark' ? '#000' : '#F0F0F0'};
  border-radius: 12px;
  padding: 12px;
  cursor: pointer;
`;
