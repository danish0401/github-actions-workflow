import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { useCallback, useContext, useEffect } from 'react';
import { ShepherdTourContext, Tour } from 'react-shepherd';
import { useLayout } from 'shared/providers/LayoutEffectsProvider';

type TourHelper = {
  onTourStart: () => void;
  onTourExit: () => void;
  tour: Tour | null;
};

const useTour = (callback?: () => void): TourHelper => {
  const tour = useContext(ShepherdTourContext);
  const { layoutRef } = useLayout();

  const onTourStart = useCallback(() => {
    if (tour && layoutRef?.current && !tour.isActive()) {
      disableBodyScroll(layoutRef.current);
      tour.start();
    }
  }, [layoutRef, tour]);

  const onTourExit = useCallback(() => {
    callback?.();
    layoutRef?.current && enableBodyScroll(layoutRef.current);
  }, [callback, layoutRef]);

  useEffect(() => {
    let isListenersEnabled = false;

    if (tour) {
      tour.on('complete', onTourExit);
      tour.on('cancel', onTourExit);
      isListenersEnabled = true;
    }

    return () => {
      if (tour && isListenersEnabled) {
        tour.off('complete', onTourExit);
        tour.off('cancel', onTourExit);
      }
    };
  }, [onTourExit, tour]);

  return {
    tour,
    onTourStart,
    onTourExit,
  };
};

export default useTour;
