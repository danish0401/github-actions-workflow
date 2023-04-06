import { Field } from 'shared/components/Field';
import { render, screen } from 'shared/lib/test-utils';

describe('Field', () => {
  test('Should render Field with default props', () => {
    render(
      <Field
        {...{
          label: 'CPM',
          value: 1000,
        }}
      />,
    );

    expect(screen.getByText(/CPM/i)).toBeInTheDocument();
    expect(screen.getByText(/1000/i)).toBeInTheDocument();
  });
});
