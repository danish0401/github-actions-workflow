import { useEffect } from 'react';
import { MY_PRODUCTS_URL } from 'shared/constants';
import useAxios from 'shared/hooks/useAxios';
import { AHMyProductsResponseType } from 'shared/types/rest';

const useUserProductList = () => {
  const { get, data, error, loading } = useAxios<AHMyProductsResponseType, unknown>();

  useEffect(() => {
    if (!data && !loading) {
      get({ url: MY_PRODUCTS_URL });
    }
  }, [data, get, loading]);

  return {
    data,
    error,
    loading,
  };
};

export default useUserProductList;
