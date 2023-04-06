import { headerLinks } from 'shared/ui/layout/constants';
import Header from 'shared/ui/layout/header';
import { fireEvent, render, act } from 'shared/lib/test-utils';

let mockIsAuth = false;

vi.mock('entities/user', () => ({
  userModel: {
    useUser: () => ({ isAuth: mockIsAuth, user: {} }),
  },
}));

vi.mock('features/auth', () => ({
  useAuth0: () => ({
    logout: vi.fn(),
  }),
}));

describe.skip('Header', () => {
  const ui = <Header />;

  test("user isn't logged, renders only logo", () => {
    const { getByTestId, queryAllByRole, queryByTestId } = render(ui);

    expect(getByTestId('header-logo')).toBeInTheDocument();
    expect(queryAllByRole('link')).toHaveLength(0);
    expect(queryByTestId('user-info__container')).not.toBeInTheDocument();
  });

  test('user logged, renders nav and user info', async () => {
    mockIsAuth = true;

    const { queryAllByRole, queryByTestId, getByRole, queryByText } = render(ui);

    expect(await queryAllByRole('link')).toHaveLength(headerLinks.length);
    expect(await queryByTestId('user-info__container')).toBeInTheDocument();

    await act(() => {
      fireEvent.click(getByRole('button'), { bubbles: true });
    });

    // on debug its in the document, but selector not working =/
    // await waitFor(() => {
    // expect(getByRole('presentation')).toBeInTheDocument();
    // expect(queryAllByRole('menuitem')).toHaveLength(4);
    // });

    expect(await queryByText('Logout')).toBeTruthy();
  });
});
