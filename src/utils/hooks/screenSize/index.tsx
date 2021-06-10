import { useEffect, useState } from 'react';

export const useScreenSize = () => {
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", checkScreenSize);
  }, []);

  const checkScreenSize = () => {
    setSize(window.innerWidth);
  };

  return size;
}