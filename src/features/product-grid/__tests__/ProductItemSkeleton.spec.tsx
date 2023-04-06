import { render } from '@testing-library/react';
import { ProductItemSkeleton } from 'features/product-grid/ui/product-item';
import { testID } from '../constants';

describe('ProductItemSkeleton', () => {
  const ui = () => <ProductItemSkeleton />;

  test('should render ProductItemSkeleton', () => {
    const { getAllByTestId } = render(ui());

    expect(getAllByTestId(testID.projectItemSkeleton).length).toBe(3);
  });
});
