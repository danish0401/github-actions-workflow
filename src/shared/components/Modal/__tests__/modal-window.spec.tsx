import ModalWindow, { CustomModal } from 'shared/components/Modal/ModalWindow';
import { render, screen } from 'shared/lib/test-utils';

const defaultProps = {
  open: true,
  onClose: vi.fn,
  slide: true,
  children: <div>Hello</div>,
};

describe('Spark Smb', () => {
  const setup = (customProps?: Partial<CustomModal>) => render(<ModalWindow {...defaultProps} {...customProps} />);

  it('Should render ModalWindow', () => {
    setup();
    expect(screen.getByText('Hello')).toBeInTheDocument();
    expect(screen.getByRole('presentation')).toBeInTheDocument();
  });
});
