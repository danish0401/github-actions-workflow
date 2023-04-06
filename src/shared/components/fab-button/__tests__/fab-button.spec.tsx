import FabButton from 'shared/components/fab-button';
import { fireEvent, render, screen, act } from 'shared/lib/test-utils';

const mockOnClick = vi.fn();
const defaultProps = {
  onClick: mockOnClick,
  tooltipTitle: '',
};

describe('Fab Button', () => {
  const setup = (customProps?: { tooltipTitle: string }) => render(<FabButton {...defaultProps} {...customProps} />);

  test('Should render Fab Button', () => {
    setup();
    const button = screen.getByRole('button', { name: 'fab-button' });
    expect(button).toBeInTheDocument();

    act(() => {
      fireEvent.click(button);
    });
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
    expect(mockOnClick).toHaveBeenCalled();
  });

  test('Should render Fab Buttons tooltip with its title', async () => {
    setup({ tooltipTitle: 'tooltip test' });

    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();

    act(() => {
      fireEvent.focus(screen.getByRole('button'));
    });

    await screen.findByRole('tooltip');
    expect(screen.getByText('tooltip test')).toBeInTheDocument();
  });
});
