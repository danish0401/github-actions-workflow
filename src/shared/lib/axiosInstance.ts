import axios from 'axios';
import { getTokens, removeTokens, setTokens } from 'shared/api/auth';
import { AHErrorType } from 'shared/types/rest';
import { TOKEN_REFRESH_URL } from 'shared/constants';
import validateEnvironment from './validateEnvironment';

const { VITE_AH_API_URL = '' } = import.meta.env;

validateEnvironment({
  API_URL: VITE_AH_API_URL,
  name: 'Axios api',
});

const instance = axios.create({
  baseURL: VITE_AH_API_URL,
  timeout: 5000,
});

// Request interceptor for API calls
instance.interceptors.request.use(
  async (config) => {
    const { accessToken } = getTokens();
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

// Response interceptor for API calls
instance.interceptors.response.use(
  (response) => response,
  async function (error) {
    const originalRequest = error.config;

    const { errors = [] } = error.response.data;

    if (
      error.response.status === 401 &&
      !originalRequest._retry &&
      errors.some((err: AHErrorType) => err.code === 'token_not_valid')
    ) {
      originalRequest._retry = true;
      try {
        const { refreshToken } = getTokens();
        const token = await refreshAccessToken(refreshToken ?? '');

        if (token) {
          instance.defaults.headers.common.Authorization = 'Bearer ' + token;
        }
      } catch (err) {
        return Promise.reject(err);
      }

      return instance(originalRequest);
    }
    return Promise.reject(error);
  },
);

export const refreshAccessToken = (refreshToken: string) =>
  new Promise((resolve) => {
    instance
      .post(TOKEN_REFRESH_URL, { refresh: refreshToken })
      .then(({ data }) => {
        setTokens({
          accessToken: data?.access || '',
          refreshToken: data?.refresh || '',
        });
        resolve(data?.access || '');
      })
      .catch(() => {
        removeTokens();
        window.location.href = '/login';
      });
  });

export default instance;
