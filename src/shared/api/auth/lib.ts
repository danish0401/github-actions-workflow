import { ACCESS_TOKEN, REFRESH_TOKEN } from './constants';

export const setTokens = ({ accessToken, refreshToken }: { accessToken: string; refreshToken: string }): void => {
  localStorage.setItem(ACCESS_TOKEN, accessToken);
  localStorage.setItem(REFRESH_TOKEN, refreshToken);
};

export const setRefreshToken = (token: string): void => {
  localStorage.setItem(REFRESH_TOKEN, token);
};

export const getAuthToken = (): string | null => {
  return localStorage.getItem(ACCESS_TOKEN) || null;
};

export const getTokens = (): {
  accessToken: string | null;
  refreshToken: string | null;
} => {
  return {
    accessToken: localStorage.getItem(ACCESS_TOKEN) || null,
    refreshToken: localStorage.getItem(REFRESH_TOKEN) || null,
  };
};

export const removeTokens = (): void => {
  localStorage.removeItem(ACCESS_TOKEN);
  localStorage.removeItem(REFRESH_TOKEN);
};
