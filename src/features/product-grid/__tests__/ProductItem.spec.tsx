import { FC, SVGProps } from 'react';
import { ProductItem } from 'features/product-grid/ui/product-item';
import analytics from 'shared/providers/analytics';
import { render } from 'shared/lib/test-utils';

const mocks = {
  label: 'mocked label',
  isConfluented: true,
};

describe('ProductItem', () => {
  const ui = () => (
    <ProductItem
      id={0}
      label={mocks.label}
      name={''}
      isConfluented={mocks.isConfluented}
      link={''}
      isAvailable={true}
      iconSet={{
        base: analytics as FC<SVGProps<SVGSVGElement>>,
        hovered: analytics as FC<SVGProps<SVGSVGElement>>,
        inactive: analytics as FC<SVGProps<SVGSVGElement>>,
      }}
    />
  );

  test('should render ProductItem', () => {
    const { getByText } = render(ui());

    expect(getByText(mocks.label)).toBeInTheDocument();
  });

  test.fails('should not render text related disable props', () => {
    const { getByText } = render(ui());

    expect(getByText('Coming soon')).toBeInTheDocument();
  });

  test('should render text related disable props', () => {
    mocks.isConfluented = false;

    const { getByText } = render(ui());

    expect(getByText('Coming soon')).toBeInTheDocument();
  });
});
