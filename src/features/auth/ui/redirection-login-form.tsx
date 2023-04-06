import { FC, useEffect } from 'react';
import isEmpty from 'lodash/isEmpty';
import { LoginForm, LoginFormDataType } from 'entities/login-form/ui/login-form';
import { urlParser } from 'shared/lib/urlParser';
import { useAuth } from 'shared/providers/auth';
import { useAHAuth } from '../hooks/useAHAuth';
import { checkAuthTokens } from '../lib';

type RedirectionLoginFormType = LoginFormDataType & {
  redirectUri: string;
};

export const RedirectionLoginForm: FC<RedirectionLoginFormType> = ({ error, loading, redirectUri }) => {
  const {
    requestAHLoginState: { data, error: requestAHLoginError, loading: requestAHLoginLoading },
    signUpWithGoogleLink,
    signUpWithSSOLink,
    passwordRecoveryLink,
    ...useAHAuthMethods
  } = useAHAuth();

  const { setToken, refreshToken } = useAuth();

  const localError = error || requestAHLoginError;
  const localLoading = loading || requestAHLoginLoading;

  if (data && !isEmpty(data)) {
    if (checkAuthTokens(data)) {
      const { access = '', refresh = '' } = data;

      setToken({
        access,
        refresh,
      });
    }
  }

  useEffect(() => {
    if (data && !loading && refreshToken) {
      const { host, protocol } = urlParser(redirectUri);
      window.location.href = `${protocol}//${host}/ahlogin/?token=${refreshToken}&redirectUri=${encodeURIComponent(
        redirectUri,
      )}`;
    }
  }, [data, loading, refreshToken]);

  return (
    <LoginForm
      error={localError}
      loading={localLoading}
      signUpWithGoogleLink={signUpWithGoogleLink(redirectUri)}
      signUpWithSSOLink={signUpWithSSOLink(redirectUri)}
      passwordRecoveryLink={passwordRecoveryLink(redirectUri)}
      {...useAHAuthMethods}
    />
  );
};
