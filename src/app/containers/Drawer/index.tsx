import React from 'react';
import { Wrapper } from './components/Wrapper';
import { Title } from './components/Title';
import { SwitcherModesDrawer } from '../SwitcherModesDrawer';
import { useMode } from '../../../hooks/useMode';

export const Drawer = () => {
  const { mode } = useMode();

  return (
    <Wrapper mode={mode}>
      <Title mode={mode}>Settings</Title>
      <SwitcherModesDrawer />
    </Wrapper>
  );
};
