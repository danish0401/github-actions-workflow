import { testID } from 'entities/user-management/constants';
import { mockedMeResponse } from 'shared/lib/test-utils/mocks';
import { act, fireEvent, render } from 'shared/lib/test-utils';
import { AHMeResponseType } from 'shared/types/rest';
import { User } from '../ui';

const mockedUseNavigate = vi.fn(() => console.log('mockedUseNavigate'));
const mockLoading = vi.fn(() => false);
const mockData = vi.fn((): AHMeResponseType | null => null);
const mockLogout = vi.fn();

vi.mock('shared/providers/auth', async () => {
  return {
    useAuth: () => ({
      user: mockData(),
      logout: mockLogout,
    }),
  };
});

vi.mock('react-router-dom', async () => {
  const actual = (await vi.importActual('react-router-dom')) as Record<string, unknown>;
  return {
    ...actual,
    useNavigate: () => mockedUseNavigate,
  };
});

describe('User', () => {
  const ui = () => <User />;

  afterEach(() => {
    vi.restoreAllMocks();
  });

  test('should render skeletone if loading', () => {
    mockLoading.mockImplementation(() => true);
    const { getByTestId } = render(ui());

    expect(getByTestId(testID.userManagementSkeleton)).toBeInTheDocument();
  });

  test('should call onLogout method', async () => {
    mockData.mockImplementation(() => mockedMeResponse);
    const { getByRole } = render(ui());
    const button = getByRole('button');

    await act(() => {
      fireEvent.click(button);
    });

    await act(() => {
      const logout = getByRole('menuitem', { name: 'Logout' });

      fireEvent.click(logout);
    });

    expect(mockLogout).toHaveBeenCalled();
    expect(mockedUseNavigate).toHaveBeenCalled();
  });
});
