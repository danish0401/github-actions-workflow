import { useCallback } from 'react';
import type { Location } from 'react-router-dom';
import { useLocation, useParams } from 'react-router-dom';
import { useAnalytics } from 'shared/providers/analytics/AnalyticsProvider';
import { TrackAnalyticEvent } from 'shared/types/analitics';

type CampaignFlowType = 'create' | 'edit' | 'renew';

const pageNameVoc = {
  renew: 'campaign_renew',
  edit: 'campaign_update',
  create: 'campaign_create',
  account: 'account',
  creatives: 'creatives_list',
};

const CAMPAIGNS_URL_FIRST_PART = 'campaigns';
const getPageName = (location: Location, flowType?: CampaignFlowType | undefined): string => {
  if (flowType && pageNameVoc[flowType]) {
    return pageNameVoc[flowType];
  }

  const pagePath = location.pathname?.split('/')?.filter(Boolean);

  // flowType fallback in case something goes wrong with it
  if (pagePath?.[0] === CAMPAIGNS_URL_FIRST_PART && pagePath?.[1]) {
    const index = pagePath[1] as CampaignFlowType;
    return pageNameVoc[index];
  }

  const path = pagePath?.[0] as keyof typeof pageNameVoc;
  // return path as a fallback
  return pageNameVoc[path] || path;
};

export const useTrackTimedEvent = (flowType?: CampaignFlowType): { trackEvent: TrackAnalyticEvent } => {
  const { campaignId } = useParams();
  const location = useLocation();
  const { mixpanel } = useAnalytics();

  const pageName = getPageName(location, flowType);

  const trackEvent: TrackAnalyticEvent = useCallback(
    (eventName: string, props?: Record<string, unknown>) => {
      if (mixpanel) {
        mixpanel.time_event(eventName);
        mixpanel.track(eventName, { page_name: pageName, campaign_id: campaignId, ...props });
      }
    },
    [mixpanel, pageName, campaignId],
  );

  return { trackEvent };
};
