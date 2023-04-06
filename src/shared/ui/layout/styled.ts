import { Grid, styled } from '@mui/material';
import { footerHeight, mainHeaderHeight } from './constants';

export const StyledMainWrapper = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export const StyledMain = styled('main')(({ theme }) => ({
  display: 'flex',
  flexGrow: 1,
  flexDirection: 'column',
  height: `calc(100vh - ${mainHeaderHeight + footerHeight}px)`,
  padding: theme.spacing(3),
  overflow: 'overlay',
  minHeight: '100%',
}));

export const StyledLoginMain = styled('main')(() => ({
  height: '100%',
}));

export const StyledGridLoginContainer = styled(Grid)(() => ({
  height: '100vh',
  backgroundImage: `
    linear-gradient(108.48deg, #FCFCFC 12.75%, #E6E6E6 77.49%),
    linear-gradient(0deg, #F5F5F5 12.55%, rgba(245, 245, 245, 0) 72.64%)
  `,
}));

export const StyledFooter = styled(Grid)(() => ({
  flex: 'auto !important',
}));
