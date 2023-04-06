import { useLocation } from 'react-router-dom';
import { parse } from 'query-string';
import isEmpty from 'lodash/isEmpty';
import { useEffect } from 'react';
import useAxios from 'shared/hooks/useAxios';
import { TOKEN_REFRESH_URL } from 'shared/constants';
import { AHErrorType } from 'shared/types/rest';
import { useAuth } from 'shared/providers/auth';

export type AHResponseType = {
  access?: string;
  refresh?: string;
};

export const useLogin = () => {
  const location = useLocation();
  const { setToken, refreshToken, user } = useAuth();

  const { refresh_token: refreshSearchToken, redirectUri, redirectURI } = parse(location.search);

  const { post, data, loading, error } = useAxios<AHResponseType, AHErrorType[]>();

  const refresh = ((refreshSearchToken as string) || refreshToken) ?? '';

  const redirectionUri = (redirectUri as string | undefined) || (redirectURI as string | undefined);

  if (refresh && isEmpty(data) && !loading && isEmpty(error)) {
    post({ url: TOKEN_REFRESH_URL, data: { refresh } });
  }

  useEffect(() => {
    if (data?.access) {
      setToken({
        access: data?.access,
        refresh,
      });
    }
  }, [data?.access]);

  return { data, loading, error, redirectUri: redirectionUri, user };
};
