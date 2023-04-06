import { render } from 'shared/lib/test-utils';
import SnackbarProviderContainer from 'shared/snackbar-notification';

describe('snackbar provider', () => {
  it('renders provider', async () => {
    const { findByText } = render(
      <SnackbarProviderContainer>
        <div>TEST</div>
      </SnackbarProviderContainer>,
    );

    expect(await findByText('TEST')).toBeInTheDocument();
  });
});
