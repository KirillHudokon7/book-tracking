import styled from 'styled-components';

interface TitleProps {
  readonly mode: string;
}

export const Title = styled.div<TitleProps>`
  font-weight: 500;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: -0.012em;
  color: ${(props) => props.mode === 'dark' ? '#c3c3c3' : '#3c3c3c'};
  margin-left: 12px;
`;
