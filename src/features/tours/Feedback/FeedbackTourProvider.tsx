import { FC } from 'react';
import { ShepherdOptionsWithType } from 'react-shepherd';
import ShepherdProvider from 'features/tours/shepherd-provider';

const steps: ShepherdOptionsWithType[] = [
  {
    id: 'intro',
    attachTo: { element: '.feedback__target', on: 'right' },
    buttons: [
      {
        classes: 'button-primary',
        text: 'Got it',
        type: 'next',
      },
    ],
    classes: 'shepherd__intro',
    title: 'Welcome to Ad Manager!',
    text: [
      `Our product is in early beta so it might have a few issues.
      Please share your feedback from any page.
      We appreciate any feedback you have - good or bad. Thanks.`,
    ],
  },
];

const FeedbackTourProvider: FC<ChildrenProps> = ({ children }) => {
  return <ShepherdProvider steps={steps}>{children}</ShepherdProvider>;
};

export default FeedbackTourProvider;
