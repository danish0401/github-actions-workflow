import { FC, useEffect } from 'react';
import { useTour, ShepherdProvider } from 'features/tours';
import { useUser } from 'entities/user/model';
import { welcomeBonusTourSteps } from './constants';

const WelcomeBonusTour: FC = () => {
  const { user, isAuth } = useUser();

  if (!isAuth || user?.onboardingTours?.welcomeBonusHighlight) {
    return null;
  }

  return (
    <ShepherdProvider steps={welcomeBonusTourSteps}>
      <WelcomeBonusTourStart />
    </ShepherdProvider>
  );
};

export default WelcomeBonusTour;

const WelcomeBonusTourStart = () => {
  const { updateUser } = useUser();
  const onTourExitHandler = () => {
    updateUser({
      onboardingTours: {
        welcomeBonusHighlight: true,
      },
    });
  };

  const { onTourStart } = useTour(onTourExitHandler);

  useEffect(() => {
    onTourStart();
  }, [onTourStart]);

  return null;
};
