import { useCallback } from 'react';
import { removeTokens } from 'shared/api/auth';
import { TOKEN_URL } from 'shared/constants';
import useAxios from 'shared/hooks/useAxios';

const { VITE_AH_API_URL = '', VITE_AH_URL = '' } = import.meta.env;

export const GOOGLE_AUTH_URL = `${VITE_AH_API_URL}/accounts/google/login/?next=`;
export const SSO_AUTH_URL = `${VITE_AH_API_URL}/saml/login/?next=`;
export const PASSWORD_RECOVERY_URL = `${VITE_AH_URL}/recover-password?redirect_uri=`;

const originRedirectUri = `${window.location.origin}/login`;

export type RequestAHLoginType = {
  email: string;
  password: string;
};

export type AHResponseType = {
  access?: string;
  refresh?: string;
};

export type AHErrorType = {
  code?: string;
  field?: null | string;
  message: string;
  type?: string;
};

export type AHErrorResponseType = {
  errors: AHErrorType[];
};

export const useAHAuth = () => {
  const {
    post,
    resetError: resetAHLoginStateError,
    data,
    error,
    loading,
  } = useAxios<AHResponseType, AHErrorType[] | null>();

  const signUpWithGoogleLink = useCallback(
    (redirectUri = originRedirectUri) => encodeURI(`${GOOGLE_AUTH_URL}${redirectUri}`),
    [],
  );
  const signUpWithSSOLink = useCallback(
    (redirectUri = originRedirectUri) => encodeURI(`${SSO_AUTH_URL}${redirectUri}`),
    [],
  );
  const passwordRecoveryLink = useCallback(
    (redirectUri = originRedirectUri) => encodeURI(`${PASSWORD_RECOVERY_URL}${redirectUri}`),
    [],
  );

  const signUp = useCallback(
    (userData: RequestAHLoginType) => {
      post({
        url: TOKEN_URL,
        data: userData,
      });
    },
    [post],
  );

  if (error) {
    removeTokens();
  }

  return {
    signUp,
    signUpWithGoogleLink,
    signUpWithSSOLink,
    passwordRecoveryLink,
    requestAHLoginState: {
      data,
      error,
      loading,
    },
    resetAHLoginStateError,
  };
};
