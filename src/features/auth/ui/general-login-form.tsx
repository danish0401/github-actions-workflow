import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import isEmpty from 'lodash/isEmpty';
import { LoginForm, LoginFormDataType } from 'entities/login-form/ui/login-form';
import { useAuth } from 'shared/providers/auth';
import { useAHAuth } from '../hooks/useAHAuth';
import { checkAuthTokens } from '../lib';

export const GeneralLoginForm: FC<LoginFormDataType> = ({ error, loading }) => {
  const navigate = useNavigate();
  const { setTokenWithUser } = useAuth();

  const {
    requestAHLoginState: { data, error: requestAHLoginError, loading: requestAHLoginLoading },
    signUpWithGoogleLink,
    signUpWithSSOLink,
    passwordRecoveryLink,
    ...useAHAuthMethods
  } = useAHAuth();

  const localError = error || requestAHLoginError;
  const localLoading = loading || requestAHLoginLoading;

  if (data && !isEmpty(data)) {
    if (checkAuthTokens(data)) {
      const { access = '', refresh = '' } = data;

      setTokenWithUser({
        access,
        refresh,
      });

      navigate('/', { replace: true });
    }
  }

  return (
    <LoginForm
      error={localError}
      loading={localLoading}
      signUpWithGoogleLink={signUpWithGoogleLink()}
      signUpWithSSOLink={signUpWithSSOLink()}
      passwordRecoveryLink={passwordRecoveryLink()}
      {...useAHAuthMethods}
    />
  );
};
