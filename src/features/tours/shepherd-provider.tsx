import { FC } from 'react';
import { ShepherdOptionsWithType, ShepherdTour } from 'react-shepherd';
import { defaultOptions } from 'features/tours/config';
import 'shepherd.js/dist/css/shepherd.css';
import './shepherd-helper.css';

const { REACT_APP_IS_SHEPHERD_ENABLED } = import.meta.env;

const isShepherdEnabled = REACT_APP_IS_SHEPHERD_ENABLED?.toLowerCase() === 'true';

const ShepherdProvider: FC<
  ChildrenProps & {
    steps: ShepherdOptionsWithType[];
  }
> = ({ children, steps }) => {
  if (!isShepherdEnabled) {
    return null;
  }

  return (
    <ShepherdTour steps={steps} tourOptions={defaultOptions}>
      {children}
    </ShepherdTour>
  );
};

export default ShepherdProvider;
