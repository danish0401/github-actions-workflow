import { render, screen } from 'shared/lib/test-utils';
import StyledLinearProgress from './index';

describe('Styled Linear Progress', () => {
  const setup = ({ progress, height }: { progress: number; height: number }) =>
    render(<StyledLinearProgress {...{ progress, height }} />);

  it('Should render StyledLinearProgress', () => {
    setup({ progress: 50, height: 10 });
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });
});
