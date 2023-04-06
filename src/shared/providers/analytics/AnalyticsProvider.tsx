import { createContext, FC, useContext, useEffect, useState } from 'react';
import { getIsEnabled } from 'shared/providers/analytics/lib';
import type { MixpanelActions } from 'shared/providers/analytics/mixpanel';

export const AnalyticsContext = createContext<{
  mixpanel: MixpanelActions | null;
}>({
  mixpanel: null,
});

export const useAnalytics = () => useContext(AnalyticsContext);

const AnalyticsProvider: FC<ChildrenProps> = ({ children }) => {
  const [mixpanel, setMixpanel] = useState<MixpanelActions | null>(null);

  const isEnabled = getIsEnabled();

  useEffect(() => {
    if (!isEnabled) {
      // in case of add autotests flag after app init
      if (mixpanel) {
        mixpanel.disable();
        setMixpanel(null);
      }

      return;
    }

    let didCancel = false;

    const getLib = async () => {
      const { actions } = await import(/* webpackChunkName: "mixpanel" */ 'shared/providers/analytics/mixpanel');

      if (actions && !didCancel) {
        setMixpanel(actions);
      }
    };

    !mixpanel && getLib();

    return () => {
      didCancel = true;
    };
  }, [isEnabled, mixpanel]);

  return (
    <AnalyticsContext.Provider
      value={{
        mixpanel,
      }}
    >
      {children}
    </AnalyticsContext.Provider>
  );
};

export default AnalyticsProvider;
