import Grid from '@mui/material/Grid';
import { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { Box, Typography, styled, useTheme } from '@mui/material';
import { GeneralLoginForm, RedirectionLoginForm, useLogin } from 'features/auth';
import image from 'shared/assets/images/login-page-image.svg';
import Logo from 'shared/ui/layout/logo';
import { useAuth } from 'shared/providers/auth';

const Page: FC = () => {
  const { error, loading, redirectUri } = useLogin();
  const { user } = useAuth();

  const {
    assets,
    typography: { pxToRem },
  } = useTheme();

  if (user && !redirectUri) {
    return <Navigate to={{ pathname: '/' }} replace={true} />;
  }

  return (
    <Grid container item xs={12} height={'100%'}>
      <Grid item container xs={8} flexDirection='column' wrap='nowrap'>
        <Grid
          item
          xs={12}
          sx={{
            flex: 'auto !important',
          }}
        >
          <Box pl={3} pt={3}>
            <Logo logoAsset={assets?.logo?.icon} />
          </Box>
        </Grid>
        <Grid
          item
          container
          xs={12}
          alignItems='center'
          sx={{
            backgroundImage: `url(${image})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '90% 90%',
          }}
        >
          <Grid container>
            <Grid item container xs={7} justifyContent='center'>
              <StyledTextWrapper>
                <Typography fontSize={pxToRem(24)} fontWeight={200} letterSpacing='0.08rem'>
                  Explore the platform
                </Typography>
                <StyledTypography>
                  Compulse 360 <br /> Portal
                </StyledTypography>
              </StyledTextWrapper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={4}>
        <StyledFormWrapper>
          {redirectUri ? (
            <RedirectionLoginForm error={error} loading={loading} redirectUri={redirectUri} />
          ) : (
            <GeneralLoginForm error={error} loading={loading} />
          )}
        </StyledFormWrapper>
      </Grid>
    </Grid>
  );
};

export default Page;

const StyledFormWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  height: '100%',
  display: 'flex',
}));

const StyledTextWrapper = styled(Box)(() => ({
  display: 'flex',
  alignSelf: 'center',
  flexDirection: 'column',
  flexWrap: 'nowrap',
  transform: 'translatey(-50%)',
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  background: 'linear-gradient(90deg, #EF5023, #E30A7B)',
  backgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontSize: theme.typography.pxToRem(48),
  fontWeight: '900',
  letterSpacing: '-0.1rem',
  display: 'inline-block',
  lineHeight: 1.2,
}));
