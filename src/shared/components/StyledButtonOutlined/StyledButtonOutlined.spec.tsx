import { StyledButtonOutlined } from 'shared/components/StyledButtonOutlined';
import { render, screen } from 'shared/lib/test-utils';

describe('it renders StyledButton', () => {
  render(<StyledButtonOutlined onClick={vi.fn()}>TEST</StyledButtonOutlined>);
  const element = screen.getByRole('button');

  it('render button with given children', () => {
    expect(element).toHaveTextContent('TEST');
  });
});
