import { useCallback, useState } from 'react';
import instance from 'shared/lib/axiosInstance';

type useAxiosRequestType = {
  url: string;
  data?: Record<string, string>;
};

const useAxios = <T, E>() => {
  const [response, setResponse] = useState<T | null>(null);
  const [error, setError] = useState<E | null>();
  const [loading, setLoading] = useState(false);

  const post = useCallback(({ url, data }: useAxiosRequestType) => {
    setLoading(true);
    setError(undefined);

    instance
      .post(url, data)
      .then((res) => {
        setResponse(res.data);
      })
      .catch((err) => {
        setError(err.response.data.errors);
      })
      .finally(() => setLoading(false));
  }, []);

  const get = useCallback(({ url }: { url: string }) => {
    setLoading(true);
    setError(undefined);

    instance
      .get(url)
      .then((res) => {
        setResponse(res.data);
      })
      .catch((err) => {
        setError(err.response.data.errors);
      })
      .finally(() => setLoading(false));
  }, []);

  const resetError = useCallback(() => {
    setError(null);
  }, []);

  return {
    post,
    get,
    resetError,
    data: response,
    error,
    loading,
  };
};

export default useAxios;
