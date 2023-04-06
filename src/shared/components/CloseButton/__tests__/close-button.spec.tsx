import CloseButton from 'shared/components/CloseButton';
import { fireEvent, render, screen, act } from 'shared/lib/test-utils';

const handleClose = vi.fn();

describe('CloseButton', () => {
  test('Should render CloseButton', () => {
    render(
      <CloseButton
        {...{
          top: 1,
          right: 1,
          handleClose,
        }}
      />,
    );

    expect(screen.getByRole('button', { name: 'close-button' })).toBeInTheDocument();
    expect(screen.getByTestId('CloseIcon')).toBeInTheDocument();

    act(() => {
      fireEvent.click(screen.getByRole('button', { name: 'close-button' }));
    });

    expect(handleClose).toBeCalledTimes(1);
  });
});
