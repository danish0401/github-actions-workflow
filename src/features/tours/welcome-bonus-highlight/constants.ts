import { ShepherdOptionsWithType } from 'react-shepherd';
import { formatDollars } from 'shared/lib/formatValues';

const bonusAmount = 100;

export const welcomeBonusTourSteps: ShepherdOptionsWithType[] = [
  {
    id: 'intro',
    attachTo: { element: '#user-account ', on: 'bottom' },
    buttons: [
      {
        classes: 'button-primary',
        text: 'Perfect',
        type: 'next',
      },
    ],
    classes: 'shepherd__intro shepherd__offset-top',
    title: 'The balance is already topped up!',
    text: [`To make it easier for you to launch your first campaign, we are giving you ${formatDollars(bonusAmount)}.`],
  },
];
