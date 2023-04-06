import mixpanel from 'mixpanel-browser';
import type { Dict, OverridedMixpanel, People, Query, InTrackingOptions, OutTrackingOptions } from 'mixpanel-browser';
import { mpLib } from '.';

const { VITE_MIXPANEL_TOKEN, MODE } = import.meta.env;

export type MixpanelActions = Pick<
  OverridedMixpanel,
  | 'identify'
  | 'alias'
  | 'track'
  | 'track_links'
  | 'time_event'
  | 'get_property'
  | 'disable'
  | 'register_once'
  | 'opt_in_tracking'
  | 'opt_out_tracking'
> & { people: Pick<People, 'set'> };

mixpanel.init(VITE_MIXPANEL_TOKEN || '', {
  debug: mpLib.getIsEnabled() && mpLib.getIsDebugMode(),
  opt_out_tracking_by_default: !mpLib.getIsEnabled(),
  ignore_dnt: true,
});

mixpanel.register({
  host: location.hostname,
  environment: MODE,
});

const withCheck = mpLib.withEnableFlagCheck(mpLib.getIsEnabled());

export const actions: MixpanelActions = {
  identify: (id: string) => {
    withCheck(() => mixpanel.identify(id));
  },
  alias: (id: string) => {
    withCheck(() => mixpanel.alias(id));
  },
  track: (name: string, props?: Dict) => {
    withCheck(() =>
      mixpanel.track(name, {
        ...props,
        ...(mpLib.getIsDebugMode() && {
          ls_debug: mpLib.printLocalStorage(),
          isMixpanelEnabled: mpLib.getIsMixpanelEnabledEnv(),
        }),
      }),
    );
  },
  track_links: (query: Query, eventName: string, props: Dict) => {
    withCheck(() => mixpanel.track_links(query, eventName, props));
  },
  people: {
    set: (props) => {
      withCheck(() => mixpanel.people.set(props as Dict));
    },
  },
  time_event: (eventName: string) => {
    withCheck(() => mixpanel.time_event(eventName));
  },
  disable: () => {
    withCheck(() => mixpanel.disable());
  },
  get_property: (propertyName: string) => {
    withCheck(() => mixpanel.get_property(propertyName));
  },

  register_once(props: Dict, defaultValue?: any, days?: number) {
    withCheck(() => mixpanel.register_once(props, defaultValue, days));
  },

  opt_in_tracking(options?: Partial<InTrackingOptions>) {
    mixpanel.opt_in_tracking(options);
  },
  opt_out_tracking(options?: Partial<OutTrackingOptions>) {
    mixpanel.opt_out_tracking(options);
  },
};
