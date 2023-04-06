import { useEffect } from 'react';
import { AppTypes } from 'shared/types/app';

// import { pixel } from './constants';

const { VITE_APPLICATION_TYPE } = import.meta.env.VITE_APPLICATION_TYPE;

export const useTargetingPixel = () => {
  useEffect(() => {
    let isAdjacent = false;

    if (VITE_APPLICATION_TYPE === AppTypes.SBG && !isAdjacent) {
      isAdjacent = true;
      // document.body.insertAdjacentHTML('beforeend', pixel);
    }

    return () => {
      if (isAdjacent) {
        const selector = document.querySelector('.pixel-selector');
        if (selector) {
          document.body.removeChild(selector);
        }
      }
    };
  }, []);
};
