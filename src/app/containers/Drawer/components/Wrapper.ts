import styled from 'styled-components';

interface WrapperProps {
  readonly mode: string;
}

export const Wrapper = styled.div<WrapperProps>`
  min-width: 228px;
  background-color: ${(props) => props.mode === 'dark' ? '#1E1E1E' : '#F0F0F0'};
  padding: 24px 36px 0;
`;
