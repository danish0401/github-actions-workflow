import { VALIDATION_MESSAGE } from 'entities/login-form/constants';
import { act, fireEvent, render } from 'shared/lib/test-utils';
import { AHErrorType } from 'shared/types/rest';
import { LoginForm } from '../ui/login-form';

const USERNAME_PLACEHOLDER = 'Enter your email address here...';
const PASSWORD_PLACEHOLDER = 'Enter password...';

const invalidEmail = 'invalidEmail';
const email = 'test@mail.com';

const mockRequestAHLogin = vi.fn(() => Promise.resolve(true));
const mockResetAHLoginStateError = vi.fn(() => Promise.resolve(true));
const mockLoading = vi.fn(() => false);
const mockError = vi.fn((): AHErrorType[] => []);

describe('login-form', () => {
  const ui = () => (
    <LoginForm
      loading={mockLoading()}
      error={mockError()}
      signUpWithGoogleLink={''}
      signUpWithSSOLink={''}
      passwordRecoveryLink={''}
      signUp={mockRequestAHLogin}
      resetAHLoginStateError={mockResetAHLoginStateError}
    />
  );

  test('it renders fields', async () => {
    const { getByPlaceholderText } = render(ui());

    expect(await getByPlaceholderText(USERNAME_PLACEHOLDER)).toBeInTheDocument();
    expect(await getByPlaceholderText(PASSWORD_PLACEHOLDER)).toBeInTheDocument();
  });

  test('it should show password as texr', async () => {
    const { getByPlaceholderText, getByDisplayValue, getByLabelText } = render(ui());

    const passwordField = (await getByPlaceholderText(PASSWORD_PLACEHOLDER)) as HTMLInputElement;

    const passwordButton = await getByLabelText('toggle password visibility', {
      selector: 'button',
    });

    fireEvent.change(passwordField, { target: { value: '42' } });
    expect(passwordField.type).toBe('password');

    await fireEvent.click(passwordButton);

    expect(passwordField.type).toBe('text');
    expect(getByDisplayValue('42')).toBeInTheDocument();
  });

  describe('Validation flow', () => {
    test('it should run walidations', async () => {
      const { getByRole, getByText } = render(ui());

      const button = getByRole('button', { name: 'Sign in' });

      await act(() => {
        fireEvent.click(button);
      });

      expect(await getByText(VALIDATION_MESSAGE.email)).toBeInTheDocument();
      expect(await getByText(VALIDATION_MESSAGE.password)).toBeInTheDocument();
      expect(mockRequestAHLogin).not.toBeCalled();
    });

    test('it should set email field value to lowerCase', async () => {
      const { getByPlaceholderText } = render(ui());

      const userNameField = (await getByPlaceholderText(USERNAME_PLACEHOLDER)) as HTMLInputElement;

      await act(() => {
        fireEvent.change(userNameField, {
          target: { value: invalidEmail.toUpperCase() },
        });
      });

      expect(userNameField.value).toBe(invalidEmail.toLowerCase());
    });

    test('shoul show validation error message if email is invalid', async () => {
      const message = 'test error message';
      mockError.mockImplementation(() => [
        {
          message,
        },
      ]);

      const { getByRole, getByPlaceholderText, getByText } = render(ui());

      const button = getByRole('button', { name: 'Sign in' });

      const userNameField = (await getByPlaceholderText(USERNAME_PLACEHOLDER)) as HTMLInputElement;

      const passwordField = (await getByPlaceholderText(PASSWORD_PLACEHOLDER)) as HTMLInputElement;

      await act(() => {
        fireEvent.change(userNameField, { target: { value: invalidEmail } });
        fireEvent.change(passwordField, { target: { value: '42' } });
      });
      await act(() => {
        fireEvent.click(button);
      });

      expect(mockResetAHLoginStateError).toBeCalled();
      expect(await getByText(VALIDATION_MESSAGE.emailValidation)).toBeInTheDocument();
      expect(mockRequestAHLogin).not.toBeCalled();
      expect(await getByText(message)).toBeInTheDocument();
    });

    test('shoul show validation error message if email is invalid', async () => {
      const { getByRole, getByPlaceholderText } = render(ui());

      const button = getByRole('button', { name: 'Sign in' });

      const userNameField = (await getByPlaceholderText(USERNAME_PLACEHOLDER)) as HTMLInputElement;

      const passwordField = (await getByPlaceholderText(PASSWORD_PLACEHOLDER)) as HTMLInputElement;

      await act(() => {
        fireEvent.change(userNameField, { target: { value: email } });
        fireEvent.change(passwordField, { target: { value: '42' } });
      });
      await act(() => {
        fireEvent.click(button);
      });

      expect(mockResetAHLoginStateError).toBeCalled();
      expect(mockRequestAHLogin).toBeCalled();
    });
  });
});
