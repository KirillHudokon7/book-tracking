import styled from 'styled-components';

interface WrapperProps {
  readonly mode: string;
}

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  justify-content: flex-end;
  background: ${(props) => props.mode === 'dark' ? '#1E1E1E' : '#F0F0F0'};
  padding: 6px;
`;
