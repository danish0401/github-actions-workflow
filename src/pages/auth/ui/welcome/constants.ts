export const welcomeTitle = 'Reach your audience to help your business grow.';

const { VITE_APPLICATION_TYPE } = import.meta.env;

const nameByAppTypeVoc = {
  SBG: 'Spark',
  LPP: 'LocalPagePop',
};

const appType = (VITE_APPLICATION_TYPE || 'SBG') as keyof typeof nameByAppTypeVoc;

const appName = nameByAppTypeVoc[appType];

export const welcomeBulletsText = [
  {
    title: 'The largest and most engaged audience reach.',
    subtitle: `${appName} gives you access to all ad-supported streaming providers in the US from one platform.
     Start serving ads to over 85% of US households with ${appName} today.`,
  },
  {
    title: 'Streaming TV you can trust.',
    subtitle:
      'Ads will run on premium publishers-only and every impression is verified by Oracle MOAT to eliminate fraud. ' +
      'Expect 95%+ of people who view your ad to watch the entire video.',
  },
  {
    title: 'Easy and Affordable.',
    subtitle:
      // eslint-disable-next-line no-template-curly-in-string
      'Plan and execute your streaming TV campaign in minutes for as little as ${minCampaignPrice} per campaign. ',
  },
  {
    title: 'Free demo.',
    subtitle: 'Create a free account to see how it works. The demo campaign is already included.',
  },
];
