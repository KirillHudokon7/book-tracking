import styled from 'styled-components';

interface TitleProps {
  readonly mode: string;
}

export const Title = styled.div<TitleProps>`
  font-weight: 600;
  font-size: 24px;
  line-height: 33px;
  letter-spacing: -0.021em;
  color: ${(props) => props.mode === 'dark' ? '#fff' : '#0F0F0F'};
`;
