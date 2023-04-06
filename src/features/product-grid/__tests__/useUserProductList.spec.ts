import { renderHook } from 'shared/lib/test-utils';
import { AHMyProductsResponseType } from 'shared/types/rest';
import { mockedMyProdyctREsponse } from 'shared/lib/test-utils/mocks';
import useUserProductList from '../hook/useUserProductList';

const mockedUseAxiosGet = vi.fn();
const mockData = vi.fn((): AHMyProductsResponseType | null => null);
const mockLoading = vi.fn(() => false);

vi.mock('shared/hooks/useAxios', async () => ({
  default: () => ({
    get: mockedUseAxiosGet,
    data: mockData(),
    loading: mockLoading(),
  }),
}));

describe('useUserProductList', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  test('should call useAxios hook', () => {
    mockData.mockImplementation(() => null);
    renderHook(() => useUserProductList());

    expect(mockedUseAxiosGet).toHaveBeenCalled();
  });

  test.fails('should not call useAxios hook if data exist', () => {
    mockData.mockImplementation(() => mockedMyProdyctREsponse);
    renderHook(() => useUserProductList());

    expect(mockedUseAxiosGet).toHaveBeenCalled();
  });

  test.fails('should not call useAxios hook if loading', () => {
    mockLoading.mockImplementation(() => true);
    renderHook(() => useUserProductList());

    expect(mockedUseAxiosGet).toHaveBeenCalled();
  });
});
