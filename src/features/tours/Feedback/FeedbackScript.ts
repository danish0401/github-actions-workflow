import { FC, useEffect } from 'react';
import useScript from 'shared/hooks/useScript';
import { APPZI_SCRIPT } from './constants';

const FeedbackScript: FC = () => {
  const status = useScript(APPZI_SCRIPT);

  useEffect(() => {
    if (status === 'error') {
      console.error('APPZI_SCRIPT loading error');
    }
  }, [status]);

  return null;
};

export default FeedbackScript;
