import { render, waitFor } from 'shared/lib/test-utils';
import LoginBackgroundImage from 'shared/ui/layout/login-background-image';

describe('Login background image', () => {
  const ui = <LoginBackgroundImage />;

  test('it renders', async () => {
    const { getByTestId } = render(ui);

    await waitFor(() => expect(getByTestId('login-background-image')).toBeInTheDocument());
  });
});
