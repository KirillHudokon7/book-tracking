import styled from 'styled-components';

const colors = {
  dark: {
    active: '#1E1E1E',
    inactive: '#000',
  },
  light: {
    active: '#F0F0F0',
    inactive: '#fff',
  }
}

interface SwitchIconProps {
  readonly active: string;
  readonly mode: string;
}

export const SwitchIcon = styled.img<SwitchIconProps>`
  background-color: ${(props) => colors[props.mode][props.active]};
  border-radius: 12px;
  padding: 15px;
  margin-right: 6px;
  cursor: pointer;
`;
