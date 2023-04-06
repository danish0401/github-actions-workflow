import { act, fireEvent, render } from 'shared/lib/test-utils';
import { mockedMeResponse } from 'shared/lib/test-utils/mocks';
import { UserManagement, UserManagementSkeleton } from '..';
import { testID } from '../constants';

const mockedData = vi.fn(() => mockedMeResponse);

describe('UserManagement', () => {
  describe('UserManagement skeleton ', () => {
    test('should ', () => {
      const ui = () => <UserManagementSkeleton />;
      const { getByTestId } = render(ui());

      expect(getByTestId(testID.userManagementSkeleton)).toBeInTheDocument();
    });
  });
  describe('UserManagement component ', () => {
    const onLogout = vi.fn();

    const ui = () => <UserManagement data={mockedData()} onLogout={onLogout} />;

    test('should render avatar', async () => {
      const { getByRole } = render(ui());

      expect(getByRole('button')).toBeInTheDocument();
    });

    test.fails('should not render menu', () => {
      const { getByRole } = render(ui());

      expect(getByRole('menu')).toBeInTheDocument();
    });

    test('should fire onLogout method', async () => {
      const { getByRole, getByText } = render(ui());

      const button = getByRole('button');

      await act(() => {
        fireEvent.click(button);
      });

      expect(getByRole('menu')).toBeInTheDocument();

      const logOutBtn = getByText('Logout');

      await act(() => {
        fireEvent.click(logOutBtn);
      });

      expect(onLogout).toHaveBeenCalled();
    });

    test('should has first letters of name in the avatar', async () => {
      mockedData.mockImplementation(() => ({
        ...mockedMeResponse,
        full_name: 'test account',
      }));

      const { getByText } = render(ui());

      expect(getByText('TA')).toBeInTheDocument();
    });
  });
});
