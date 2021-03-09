import React, { useState, useEffect } from "react";
import searchIcon from "../../../assets/images/icons/search.png";
import { SwitchIcon } from "../SwitcherView/components/SwitchIcon";
import { Search } from "../../components/Search/";
import { useMode } from "../../../hooks/useMode"; 

type Dispatch<A> = (value: A) => void;
type SetStateAction<S> = S | ((prevState: S) => S);

interface ISearchViewProps {
  setSearchText: Dispatch<SetStateAction<string>>;
}

export const SearchView: React.FC<ISearchViewProps> = ({ setSearchText }) => {
  useEffect(() => {
    let root = document.getElementById("root") as HTMLElement;
    const handleClick = (e) => {
      if (!isSearchActive && (e.target?.type !== "search" || !e.target.type)) {
        setSearchActivity(false);
      }
    };
    root.addEventListener("click", handleClick);
    () => root.removeEventListener("click", handleClick);
  }, []);
  const { mode: themeMode } = useMode();
  const [isSearchActive, setSearchActivity] = useState<boolean>(false);
  return isSearchActive ? (
    <Search mode={themeMode} onChange={setSearchText} />
  ) : (
    <SwitchIcon
      mode="lightGrey"
      active="active"
      onClick={() => setSearchActivity(!isSearchActive)}
      src={searchIcon}
      alt="List icon"
    />
  );
};
