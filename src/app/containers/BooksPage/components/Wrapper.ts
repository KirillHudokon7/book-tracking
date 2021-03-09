import styled from 'styled-components';

interface WrapperProps {
  readonly mode: string;
}

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  background-color: ${(props) => props.mode === 'dark' ? '#000' : '#fff'};
  min-height: 100vh;
`;
