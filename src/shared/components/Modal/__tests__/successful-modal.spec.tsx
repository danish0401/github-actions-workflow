import SuccessfulModal, { Props } from 'shared/components/Modal/SuccessfulModal';
import { fireEvent, render, screen, act } from 'shared/lib/test-utils';

const defaultProps = {
  onClose: vi.fn,
  title: 'Success',
  successfulText: ['text 1', 'text 2', 'text 3'],
};

describe('Spark Smb', () => {
  const setup = (customProps?: Partial<Props>) => render(<SuccessfulModal {...defaultProps} {...customProps} />);

  it('Should render SuccessfulModal', () => {
    setup();

    expect(screen.getByRole('presentation')).toBeInTheDocument();
    expect(screen.getByTestId('CloseIcon')).toBeInTheDocument();
    expect(screen.getByText('Success')).toBeInTheDocument();
    expect(screen.getByText(/Here’s what happens next/i)).toBeInTheDocument();
    expect(screen.getByText(/text 1/i)).toBeInTheDocument();
    expect(screen.getByText(/text 2/i)).toBeInTheDocument();
    expect(screen.getByText(/text 3/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Got it' })).toBeInTheDocument();
  });

  it('Should close SuccessfulModal', () => {
    const onClose = vi.fn();
    setup({ onClose });
    expect(screen.getByRole('button', { name: 'Got it' })).toBeInTheDocument();

    act(() => {
      fireEvent.click(screen.getByRole('button', { name: 'Got it' }));
    });
    expect(onClose).toBeCalledTimes(1);
  });
});
