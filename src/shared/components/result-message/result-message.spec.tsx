import { render, screen } from 'shared/lib/test-utils';

import { ResponseMessage, MessageLevel } from 'shared/types/api';
import { ResultMessage } from './index';

describe('Result message', () => {
  const setup = ({ text, level }: ResponseMessage) => render(<ResultMessage {...{ text, level }} />);

  it('Should render success message', () => {
    const { getByTestId } = setup({ text: 'success', level: MessageLevel.Success });
    expect(screen.getByText('success')).toBeInTheDocument();
    expect(getByTestId('SuccessOutlinedIcon')).toBeInTheDocument();
  });
  it('Should render warning message', () => {
    const { getByTestId } = setup({ text: 'warning', level: MessageLevel.Warning });
    expect(screen.getByText('warning')).toBeInTheDocument();
    expect(getByTestId('ReportProblemOutlinedIcon')).toBeInTheDocument();
  });

  it('Should render error message', () => {
    const { getByTestId } = setup({ text: 'error', level: MessageLevel.Error });
    expect(screen.getByText('error')).toBeInTheDocument();
    expect(getByTestId('ErrorOutlineIcon')).toBeInTheDocument();
  });

  it('Should render info message', () => {
    const { getByTestId } = setup({ text: 'info', level: MessageLevel.Info });
    expect(screen.getByText('info')).toBeInTheDocument();
    expect(getByTestId('InfoOutlinedIcon')).toBeInTheDocument();
  });
});
