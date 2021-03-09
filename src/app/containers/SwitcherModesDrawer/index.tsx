import React from 'react';
import Switch from '@material-ui/core/Switch';
import { Wrapper } from './components/Wrapper';
import { TitleWrapper } from './components/TitleWrapper';
import { Title } from './components/Title';
import lightModeIcon from '../../../assets/images/icons/lightMode.png';
import { useMode } from '../../../hooks/useMode';

export const SwitcherModesDrawer = () => {
  const { mode, handleSwitchMode } = useMode();
  const checked = mode === 'dark';

  return (
    <Wrapper>
      <TitleWrapper>
        <img src={lightModeIcon} alt="Mode icon"/>
        <Title mode={mode}>Dark mode</Title>
      </TitleWrapper>
      <Switch
        checked={checked}
        onChange={handleSwitchMode}
        color="default"
      />
    </Wrapper>
  );
};
