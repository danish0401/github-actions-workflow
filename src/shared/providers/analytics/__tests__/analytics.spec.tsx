import { act, renderHook, RenderHookResult } from 'shared/lib/test-utils';
import { MIXPANEL_ENABLED_KEY } from 'shared/providers/analytics/lib';
import { MixpanelActions } from 'shared/providers/analytics/mixpanel';
import AnalyticsProvider, { useAnalytics } from '../AnalyticsProvider';
import { mpLib } from '..';

const mockTrackFn = vi.fn();
const mockIdentifyFn = vi.fn();
const mockAliasFn = vi.fn();
const mockTrackLinksFn = vi.fn();
const mockTimeEventFn = vi.fn();
const mockGetPropertyFn = vi.fn();
const mockDisableFn = vi.fn();
const mockRegisterOnceFn = vi.fn();
const mockOptInTrackingFn = vi.fn();
const mockOptOutTrackingFn = vi.fn();

vi.mock('mixpanel-browser', () => ({
  identify: mockIdentifyFn,
  alias: mockAliasFn,
  track: mockTrackFn,
  track_links: mockTrackLinksFn,
  time_event: mockTimeEventFn,
  get_property: mockGetPropertyFn,
  disable: mockDisableFn,
  register_once: mockRegisterOnceFn,
  opt_in_tracking: mockOptInTrackingFn,
  opt_out_tracking: mockOptOutTrackingFn,
  init: vi.fn(),
  register: vi.fn(),
}));

const setup = () => {
  const wrapper = ({ children }: ChildrenProps) => <AnalyticsProvider>{children}</AnalyticsProvider>;
  return renderHook(() => useAnalytics(), { wrapper });
};
describe.skip('Analytics provider and hook', () => {
  const env = import.meta.env;

  beforeEach(() => {
    vi.resetModules();
    process.env = { ...env };
  });

  let hookCall: RenderHookResult<any, { mixpanel: MixpanelActions }> | null;

  afterEach(() => {
    window.localStorage.clear();
    hookCall = null;
    process.env = { ...env };
  });

  describe('mxp enable/disable', () => {
    it('should disable MXP by localStorage', async () => {
      window.localStorage.setItem(MIXPANEL_ENABLED_KEY, 'false');

      await act(async () => {
        hookCall = setup();
      });

      expect(hookCall?.result.current.mixpanel).toBeNull();
    });

    it('should enable MXP by localStorage', async () => {
      window.localStorage.setItem(MIXPANEL_ENABLED_KEY, 'true');

      expect(window.localStorage.getItem(MIXPANEL_ENABLED_KEY)).toBe('true');
      await act(async () => {
        hookCall = setup();
      });

      expect(hookCall?.result.current.mixpanel).not.toBeNull();
    });
  });

  describe.skip('mixpanel events', () => {
    it('should call functions', async () => {
      window.localStorage.setItem(MIXPANEL_ENABLED_KEY, 'true');

      await act(async () => {
        hookCall = setup();
      });

      act(() => {
        hookCall?.result.current.mixpanel?.track('test');
      });
      expect(mockTrackFn).toBeCalled();

      act(() => {
        hookCall?.result.current.mixpanel?.identify('test');
      });
      expect(mockIdentifyFn).toBeCalledWith('test');

      act(() => {
        hookCall?.result.current.mixpanel?.get_property('test');
      });
      expect(mockGetPropertyFn).toBeCalled();

      act(() => {
        hookCall?.result.current.mixpanel?.time_event('test');
      });
      expect(mockTimeEventFn).toBeCalled();

      act(() => {
        hookCall?.result.current.mixpanel?.track_links('#nav', 'Clicked Nav Link');
      });
      expect(mockTrackLinksFn).toBeCalled();

      act(() => {
        hookCall?.result.current.mixpanel?.register_once({ test: true });
      });
      expect(mockRegisterOnceFn).toBeCalled();

      act(() => {
        hookCall?.result.current.mixpanel?.disable();
      });
      expect(mockDisableFn).toBeCalled();

      act(() => {
        hookCall?.result.current.mixpanel?.opt_in_tracking();
      });
      expect(mockOptInTrackingFn).toBeCalled();
      act(() => {
        hookCall?.result.current.mixpanel?.opt_out_tracking();
      });
      expect(mockOptOutTrackingFn).toBeCalled();

      act(() => {
        hookCall?.result.current.mixpanel?.alias('new_id', 'existing_id');
      });
      expect(mockAliasFn).toBeCalled();
    });
  });

  describe('analytics utils', () => {
    it('withEnableFlagCheck fires', () => {
      const mockFn = vi.fn();
      mpLib.withEnableFlagCheck(true)(mockFn);
      expect(mockFn).toBeCalled();
    });

    it('withEnableFlagCheck not fires', () => {
      const mockFn = vi.fn();
      mpLib.withEnableFlagCheck(false)(mockFn);
      expect(mockFn).not.toBeCalled();
    });

    it('printLocalStorage', () => {
      window.localStorage.clear();
      const res = mpLib.printLocalStorage();

      expect(res).toBe('{}');

      window.localStorage.setItem('test', 'test');

      const res1 = mpLib.printLocalStorage();

      expect(res1).toBe('{"test":"test"}');
    });

    it('withEnableFlagCheck not fires', () => {
      const mockFn = vi.fn();
      mpLib.withEnableFlagCheck(false)(mockFn);
      expect(mockFn).not.toBeCalled();
    });
  });
});
