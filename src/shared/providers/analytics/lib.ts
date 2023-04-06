import type { Dict } from 'mixpanel-browser';
import { ACCESS_TOKEN } from 'shared/api/auth';

const MIXPANEL_DEBUG_KEY = 'mixpanel_debug';
export const MIXPANEL_ENABLED_KEY = 'mixpanel_enabled';
export const getIsMixpanelEnabledEnv = () => import.meta.env.PROD;
export const getIsEnabledLS = (): true | false | null => {
  // true | false | null
  if (localStorage.getItem(MIXPANEL_ENABLED_KEY) === 'true') {
    return true;
  }
  if (localStorage.getItem(MIXPANEL_ENABLED_KEY) === 'false') {
    return false;
  }

  return null;
};

//

export const getIsDebugMode = () => localStorage.getItem(MIXPANEL_DEBUG_KEY) === 'true';

export const withEnableFlagCheck = (isEnabledMXP: boolean) => (fn: (...args: (string | Dict)[]) => void) => {
  if (isEnabledMXP) {
    fn();
  }
};

export const printLocalStorage = () => {
  const lsObject = { ...localStorage };

  if (ACCESS_TOKEN in lsObject) {
    delete lsObject.access_token;
  }
  return JSON.stringify(lsObject, null, 0);
};

export const getIsEnabled = () => {
  const lsState = getIsEnabledLS();

  if (lsState == null) {
    return getIsMixpanelEnabledEnv();
  }

  return lsState;
};
