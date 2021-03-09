import styled from 'styled-components';

interface GenreProps {
  readonly mode: string;
}

export const Genre = styled.div<GenreProps>`
  position: absolute;
  right: 18px;
  bottom: 3.46%;
  padding: 9px 18px;
  background-color: ${(props) => props.mode === 'dark' ? 'rgba(255, 255, 255, 0.3333)' : 'rgba(0, 0, 0, 0.6666)'};
  border-radius: 12px;
  color: ${(props) => props.mode === 'dark' ? '#000' : '#fff'};
  backdrop-filter: blur(6px);
`;
