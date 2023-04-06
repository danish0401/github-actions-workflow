import { renderHook } from 'shared/lib/test-utils';
import { TOKEN_URL } from 'shared/constants';
import {
  AHErrorType,
  AHResponseType,
  GOOGLE_AUTH_URL,
  PASSWORD_RECOVERY_URL,
  SSO_AUTH_URL,
  useAHAuth,
} from '../hooks/useAHAuth';

const mockedUseAxiosPost = vi.fn();
const mockedRemoveTokens = vi.fn();
const mockedSetTokens = vi.fn();
const mockData = vi.fn(() => [] as AHResponseType);
const mockLoading = vi.fn(() => false);
const mockError = vi.fn(() => null as AHErrorType[] | null);

const testLink = 'test.link';

vi.mock('shared/hooks/useAxios', async () => ({
  default: () => ({
    post: mockedUseAxiosPost,
    data: mockData(),
    loading: mockLoading(),
    error: mockError(),
  }),
}));

vi.mock('shared/api/auth', async () => {
  return {
    removeTokens: () => mockedRemoveTokens(),
    setTokens: () => mockedSetTokens(),
  };
});

describe('useAHAuth', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  test('should return empty state', () => {
    const { result } = renderHook(() => useAHAuth());

    expect(result.current.requestAHLoginState).toStrictEqual({
      data: [],
      error: null,
      loading: false,
    });
  });

  test('should call post method of axios with params', () => {
    const { result } = renderHook(() => useAHAuth());

    const mockedData = {
      email: 'email',
      password: 'password',
    };

    result.current.signUp(mockedData);

    expect(mockedUseAxiosPost).toHaveBeenCalledWith({
      url: TOKEN_URL,
      data: mockedData,
    });
  });

  test('passwordRecovery method should return url', () => {
    const { result } = renderHook(() => useAHAuth());

    expect(result.current.passwordRecoveryLink(testLink)).toBe(PASSWORD_RECOVERY_URL + testLink);
  });

  test('signUpWithGoogleLink method should return url', () => {
    const { result } = renderHook(() => useAHAuth());

    expect(result.current.signUpWithGoogleLink(testLink)).toBe(GOOGLE_AUTH_URL + testLink);
  });

  test('signUpWithSSOLink method should return url', () => {
    const { result } = renderHook(() => useAHAuth());

    expect(result.current.signUpWithSSOLink(testLink)).toBe(SSO_AUTH_URL + testLink);
  });

  test('should call removeTokens if error exist', () => {
    mockError.mockImplementation(() => [
      {
        message: 'error',
      },
    ]);

    renderHook(() => useAHAuth());

    expect(mockedRemoveTokens).toHaveBeenCalled();
  });
});
