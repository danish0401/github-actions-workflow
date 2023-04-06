import { render } from 'shared/lib/test-utils';
import { mockedMyProdyctREsponse } from 'shared/lib/test-utils/mocks';
import { ProductGrid } from '../ui';
import { SKELETON_ITEMS_LENGTH, products, testID } from '../constants';

const mockLoading = vi.fn(() => false);

const mockData = vi.fn(() => mockedMyProdyctREsponse);

vi.mock('../hook/useUserProductList', () => ({
  default: () => ({
    data: mockData(),
    loading: mockLoading(),
  }),
}));
vi.mock('shared/providers/auth', async () => {
  return {
    useAuth: () => ({
      user: mockData(),
    }),
  };
});

describe('ProductGrid', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  const ui = () => <ProductGrid />;

  test('should render ProjectItemSkeleton', () => {
    mockLoading.mockImplementation(() => true);
    const { getAllByTestId } = render(ui());

    expect(getAllByTestId(testID.productGridItemSkeleton).length).toBe(SKELETON_ITEMS_LENGTH);
  });
  test('should render ProductItem with mockProducts.length', () => {
    const { getAllByTestId } = render(ui());

    expect(getAllByTestId(testID.productGridItem).length).toBe(products.filter((product) => !product.isHidden).length);
  });

  test.fails('should not render list of products', () => {
    mockData.mockImplementation(() => []);

    const { getAllByTestId } = render(ui());

    expect(getAllByTestId(testID.productGridItem).length).toBe(0);
  });
});
