import { useState, useEffect, useRef } from 'react';

const useWindowHeight = () => {
  const isClient = typeof window === 'object'; //Object represents browser window
  const lastHeight = useRef();

  function getSize() {
    return {
      height: isClient ? window.innerHeight : undefined,
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect((): any => {
    if (!isClient) {
      return false;
    } //Exit if not user/browser

    function handleResize() {
      if (window?.innerHeight !== lastHeight.current) {
        const clientHeight: any = getSize();

        lastHeight.current = clientHeight;

        setWindowSize(clientHeight);
      }
    }
    window.addEventListener('resize', handleResize); // <-- I am only interested in window.innerWidth !
    return () => window.removeEventListener('resize', handleResize);
  }, [windowSize]); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
};

export default useWindowHeight;
