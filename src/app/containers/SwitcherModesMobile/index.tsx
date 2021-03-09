import React from 'react';
import { Wrapper } from './components/Wrapper';
import { Image } from './components/Image';
import lightModeIcon from '../../../assets/images/icons/lightMode.png';
import darkModeIcon from '../../../assets/images/icons/darkMode.png';
import { useMode } from "../../../hooks/useMode";

export const SwitcherModes = () => {
  const { mode, handleSwitchMode } = useMode();
  const modeIcon = mode === 'dark' ? darkModeIcon : lightModeIcon;

  return (
    <Wrapper mode={mode}>
      <Image
        mode={mode}
        src={modeIcon}
        alt="Mode icon"
        onClick={handleSwitchMode}
      />
    </Wrapper>
  );
};
