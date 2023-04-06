import { useEffect } from 'react';
import { UPDATE_PRODUCT_PERMISSIONS } from 'shared/constants';
import useAxios from 'shared/hooks/useAxios';
import { useAuth } from 'shared/providers/auth';
import { productIdWithEnrichedToken } from '../constants';

const useEnrichToken = (id: number, isAvailable: boolean) => {
  const isEnrichedNeeded = productIdWithEnrichedToken.some((productId) => productId === id);
  const { refreshToken } = useAuth();

  const { post, data, error, loading } = useAxios<{ refresh: string }, unknown>();

  useEffect(() => {
    if (isEnrichedNeeded && isAvailable && !data?.refresh && !loading) {
      post({
        url: UPDATE_PRODUCT_PERMISSIONS,
      });
    }
  }, [data, post, loading, isEnrichedNeeded, isAvailable]);

  return {
    refreshToken: isEnrichedNeeded ? data?.refresh : refreshToken,
    loading: isEnrichedNeeded ? loading : false,
    error: isEnrichedNeeded ? error : null,
  };
};

export default useEnrichToken;
