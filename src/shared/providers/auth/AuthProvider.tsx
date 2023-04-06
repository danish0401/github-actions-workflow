import { FC, createContext, useCallback, useContext, useEffect, useState } from 'react';
import { getTokens, removeTokens, setTokens } from 'shared/api/auth';
import { ME_URL } from 'shared/constants';
import useAxios from 'shared/hooks/useAxios';
import { AHMeResponseType, AHTokenResponse } from 'shared/types/rest';

type AuthContextType = {
  user: AHMeResponseType | null;
  accessToken: string | null;
  refreshToken: string | null;
  setUser: (user: AHMeResponseType) => void;
  setToken: (token: AHTokenResponse) => void;
  setTokenWithUser: (token: AHTokenResponse) => void;
  logout: () => void;
};

type TokenType = {
  access: string | null;
  refresh: string | null;
};

const { accessToken: accessTokenStored, refreshToken: refreshTokenStored } = getTokens();

export const AuthContext = createContext<AuthContextType>({
  user: null,
  accessToken: null,
  refreshToken: null,
  setToken: () => ({}),
  setTokenWithUser: () => ({}),
  setUser: () => ({}),
  logout: () => ({}),
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: FC<ChildrenProps> = ({ children }) => {
  const [user, setUser] = useState<AHMeResponseType | null>(null);
  const [token, setAuthToken] = useState<TokenType>({
    access: accessTokenStored,
    refresh: refreshTokenStored,
  });

  const { get, data, loading, error } = useAxios<AHMeResponseType, unknown>();

  const setToken = useCallback(({ access, refresh }: AHTokenResponse) => {
    setAuthToken({
      access,
      refresh,
    });

    setTokens({
      accessToken: access,
      refreshToken: refresh,
    });
  }, []);

  const setTokenWithUser = useCallback(({ access, refresh }: AHTokenResponse) => {
    setToken({ access, refresh });
    get({ url: ME_URL });
  }, []);

  const logout = useCallback(() => {
    removeTokens();
    setAuthToken({
      access: null,
      refresh: null,
    });
    setUser(null);
  }, []);

  useEffect(() => {
    if (token.access && !user && !data && !loading) {
      get({ url: ME_URL });
    }
  }, [data, loading, token.access, user]);

  useEffect(() => {
    if (token.access && !user && data && !loading) {
      setUser(data);
    }
  }, [data, user, token.access, loading]);

  useEffect(() => {
    if (error) {
      console.error('error occurred during user request');
      logout();
    }
  }, [error, logout]);

  return (
    <AuthContext.Provider
      value={{
        user,
        accessToken: token.access,
        refreshToken: token.refresh,
        setUser,
        setToken,
        setTokenWithUser,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
