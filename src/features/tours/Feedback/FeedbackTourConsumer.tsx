import { styled } from '@mui/material/styles';
import { FC, useEffect } from 'react';
import {
  APPZI_BUTTON_DELAY,
  APPZI_SCRIPT,
  FEEDBACK_BUTTON_WIDTH,
  FEEDBACK_TOUR_ID,
} from 'features/tours/Feedback/constants';
import useTour from 'features/tours/useTour';
import useScript from 'shared/hooks/useScript';

const FeedbackTourConsumer: FC = () => {
  const status = useScript(APPZI_SCRIPT);

  if (status !== 'ready') {
    return null;
  }
  return <FeedbackTourStart />;
};

export default FeedbackTourConsumer;

const FeedbackTourStart: FC = () => {
  const onTourExitHandler = () => localStorage?.setItem(FEEDBACK_TOUR_ID, 'disabled');

  const { onTourStart } = useTour(onTourExitHandler);

  useEffect(() => {
    // need timeout due APPZI button transitions
    const timeout = setTimeout(() => {
      onTourStart();
    }, APPZI_BUTTON_DELAY);

    return () => clearTimeout(timeout);
  }, [onTourStart]);

  return <FakeFeedbackButton className={'feedback__target'}>&nbsp;</FakeFeedbackButton>;
};

const FakeFeedbackButton = styled('div')(() => ({
  position: 'fixed',
  left: FEEDBACK_BUTTON_WIDTH,
  top: '50%',
  transform: 'translate(0, -50%)',
  opacity: 0,
  width: 0,
}));
