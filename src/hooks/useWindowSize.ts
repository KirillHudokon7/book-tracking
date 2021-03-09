import { useState, useEffect } from 'react';

interface IWindowSizeState {
  width: null | number;
  height: null | number;
}

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<IWindowSizeState>({
    width: null,
    height: null,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}
