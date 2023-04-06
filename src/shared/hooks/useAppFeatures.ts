import { AppTypes } from 'shared/types/app';
// import { FeaturesFragment, useAppConfigQuery } from 'shared/hooks/app-config/api/AppConfig.generated';

// fallback to prevent flickering on first load
const { VITE_APPLICATION_TYPE } = import.meta.env.VITE_APPLICATION_TYPE;
const signUpFallbackByAppType = VITE_APPLICATION_TYPE === AppTypes.SBG;

const featuresFallback = {
  amAdvertisers: false,
  publisherPackages: false,
  radioButtonForPublisherPackages: true,
  chatbot: false,
  updateAppConfig: false,
  signup: signUpFallbackByAppType,
};

export function useAppFeatures() {
  return featuresFallback;
}
