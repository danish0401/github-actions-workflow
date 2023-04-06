import { FC, lazy, Suspense } from 'react';
import { FEEDBACK_TOUR_ID } from './constants';

const { REACT_APP_IS_SHEPHERD_ENABLED, NODE_ENV } = import.meta.env;
const FeedbackTourProvider = lazy(() => import('./FeedbackTourProvider'));
const FeedbackTourConsumer = lazy(() => import('./FeedbackTourConsumer'));
const FeedbackScript = lazy(() => import('./FeedbackScript'));
const isShepherdEnabled = REACT_APP_IS_SHEPHERD_ENABLED?.toLowerCase() === 'true';

const Feedback: FC = () => {
  const isTourDisabled = !isShepherdEnabled || !!localStorage?.getItem(FEEDBACK_TOUR_ID);

  // no need to load script or tour for dev env
  if (NODE_ENV === 'development') {
    return null;
  }

  // display only feedback button
  if (isTourDisabled) {
    return (
      <Suspense fallback={null}>
        <FeedbackScript />
      </Suspense>
    );
  }

  // display feedback button and start tour
  return (
    <Suspense fallback={null}>
      <FeedbackTourProvider>
        <FeedbackTourConsumer />
      </FeedbackTourProvider>
    </Suspense>
  );
};

export default Feedback;
