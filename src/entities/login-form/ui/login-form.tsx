import LoadingButton from '@mui/lab/LoadingButton';
import { Box, Grid, IconButton, InputAdornment, Typography } from '@mui/material';
import { FC, SyntheticEvent, useCallback, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { AHErrorType, AHLoginRequestType } from 'shared/types/rest';
import { buttonTextByState } from '../constants';
import { validationRules } from '../lib';
import MessagesComponent from './messages-component';
import {
  StyledBox,
  StyledFormHelperText,
  StyledInputLabel,
  StyledRecoveryLink,
  StyledSSOButton,
  StyledTextField,
} from './styled';

export type FormValues = {
  email: string;
  password: string;
};

export type LoginFormDataType = {
  error?: AHErrorType[] | null;
  loading: boolean;
};

export type LoginFormType = LoginFormDataType & {
  signUpWithGoogleLink: string;
  signUpWithSSOLink: string;
  passwordRecoveryLink: string;
  signUp: (userData: AHLoginRequestType) => void;
  resetAHLoginStateError: () => void;
};

// Temporary solution while SSO on prod doesn't work
const { VITE_SSO_DISABLED = false } = import.meta.env;

export const LoginForm: FC<LoginFormType> = ({
  error,
  loading,
  signUp,
  signUpWithGoogleLink,
  signUpWithSSOLink,
  passwordRecoveryLink,
  resetAHLoginStateError,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const {
    control,
    getValues,
    trigger,
    formState: { errors, isValid },
  } = useForm<AHLoginRequestType>({
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = useCallback(
    async (e: SyntheticEvent) => {
      e?.preventDefault();

      await trigger();

      if (!isValid) return false;

      signUp(getValues());
    },
    [trigger, isValid, signUp, getValues],
  );

  return (
    <StyledBox>
      <Typography mb={3} fontSize={16} fontWeight={700}>
        Sign in to your account:
      </Typography>

      <form onSubmit={onSubmit}>
        <Box mb={3}>
          <StyledInputLabel>Email</StyledInputLabel>

          <Controller
            control={control}
            rules={validationRules.email}
            name='email'
            render={({ field: { onChange, value } }) => (
              <StyledTextField
                fullWidth
                placeholder='Enter your email address here...'
                onChange={(e) => {
                  if (e?.target?.value) {
                    e.target.value = e.target.value.trim().toLowerCase();
                  }
                  onChange(e);
                  resetAHLoginStateError();
                }}
                error={!!errors.email}
                value={value}
              />
            )}
          />

          <StyledFormHelperText>{errors.email?.message}</StyledFormHelperText>
        </Box>

        <Box mb={3}>
          <StyledInputLabel>Password</StyledInputLabel>

          <Controller
            control={control}
            name='password'
            rules={validationRules.password}
            render={({ field: { onChange, value } }) => (
              <StyledTextField
                fullWidth
                placeholder='Enter password...'
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton aria-label='toggle password visibility' onClick={handleClickShowPassword} edge='end'>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                onChange={(v) => {
                  onChange(v);
                  resetAHLoginStateError();
                }}
                error={!!errors.password}
                value={value}
              />
            )}
          />

          <StyledFormHelperText>{errors.password?.message}</StyledFormHelperText>
        </Box>

        {!!error?.length && <MessagesComponent error={error} />}

        <Box mb={3}>
          <LoadingButton
            variant='accent'
            type='submit'
            size='large'
            sx={{
              width: '100%',
              height: 56,
            }}
            loading={loading}
          >
            {buttonTextByState.signin}
          </LoadingButton>
        </Box>

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <StyledSSOButton variant='outlined' href={signUpWithSSOLink} disabled={VITE_SSO_DISABLED}>
              {buttonTextByState.sinclairSSO}
            </StyledSSOButton>
          </Grid>
          <Grid item xs={6}>
            <StyledSSOButton variant='outlined' href={signUpWithGoogleLink}>
              {buttonTextByState.googleSSO}
            </StyledSSOButton>
          </Grid>
          <Grid container item xs={12} justifyContent={'center'}>
            <StyledRecoveryLink href={passwordRecoveryLink}>{buttonTextByState.passwordRecovery}</StyledRecoveryLink>
          </Grid>
        </Grid>
      </form>
    </StyledBox>
  );
};

LoginForm.defaultProps = {
  error: undefined,
};
