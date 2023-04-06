import { styled } from '@mui/material/styles';

export const StyledImg = styled('img')<{ isFallback?: boolean }>(({ theme, isFallback }) => ({
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  zIndex: -1,
  backgroundColor: theme.palette.primary.dark,
  opacity: isFallback ? 0.7 : 1,
}));
