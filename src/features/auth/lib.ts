import { AHResponseType } from './hooks/useAHAuth';

export const checkAuthTokens = ({ access, refresh }: AHResponseType) => {
  const resp = !!access && !!refresh;

  if (!resp) {
    throw new Error('accessToken or refreshToken are undefined');
  }

  return resp;
};
