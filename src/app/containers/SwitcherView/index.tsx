import React from "react";
import { SwitcherWrapper } from "./components/SwitcherWrapper";
import { SwitchIcon } from "./components/SwitchIcon";
import { useMode } from "../../../hooks/useMode";
import { SearchView } from "../SearchView/";
import { useWindowSize } from "../../../hooks/useWindowSize";
import {Dispatch, SetStateAction} from '../../../utils/'

import lightGridIcon from "../../../assets/images/icons/lightGrid.png";
import darkGridIcon from "../../../assets/images/icons/darkGrid.png";
import lightListIcon from "../../../assets/images/icons/lightList.png";
import darkListIcon from "../../../assets/images/icons/darkList.png";

interface ISwitcherViewProps {
  mode: string;
  setSearchText: Dispatch<SetStateAction<string>>;
  onGridMode: () => void;
  onListMode: () => void;
}

export const SwitcherView: React.FC<ISwitcherViewProps> = ({
  mode,
  setSearchText,
  onGridMode,
  onListMode,
}) => {
  const { width } = useWindowSize();
  const { mode: themeMode } = useMode();

  const gridActivation = mode === "grid" ? "active" : "inactive";
  const listActivation = mode === "grid" ? "inactive" : "active";
  const gridIcon = themeMode === "dark" ? lightGridIcon : darkGridIcon;
  const listIcon = themeMode === "dark" ? lightListIcon : darkListIcon;

  return (
    <SwitcherWrapper>
      <SwitchIcon
        mode={themeMode}
        active={gridActivation}
        onClick={onGridMode}
        src={gridIcon}
        alt="Grid icon"
      />
      <SwitchIcon
        mode={themeMode}
        active={listActivation}
        onClick={onListMode}
        src={listIcon}
        alt="List icon"
      />
      {width && width > 768 && (
        <SearchView setSearchText={setSearchText}/>
      )}
    </SwitcherWrapper>
  );
};
