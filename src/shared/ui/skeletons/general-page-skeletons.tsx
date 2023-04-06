import { Box, CircularProgress, Skeleton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FC } from 'react';
import { footerHeight, mainHeaderHeight } from 'shared/ui/layout/constants';

const PreloaderContainer: FC<ChildrenProps> = ({ children }) => (
  <Box
    sx={{
      width: '100%',
      // header footer paddings
      height: (theme) => `calc(100vh - ${mainHeaderHeight}px - ${footerHeight}px - ${theme.spacing(6)})`,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    {children}
  </Box>
);

export const LayoutPreloader: FC = () => {
  return (
    <PreloaderContainer>
      <CircularProgress size={72} thickness={3} />
    </PreloaderContainer>
  );
};

export const LayoutPreloaderNoAuth: FC = () => {
  return (
    <PreloaderContainer>
      <LayoutSkeleton variant='rounded' />
    </PreloaderContainer>
  );
};

export const LayoutSkeleton = styled(Skeleton)(({ theme }) => ({
  minHeight: '100%',
  flexGrow: 1,
  width: '100%',
  boxShadow: '10px 20px 30px rgb(112 144 176 / 15%)',

  borderRadius: theme.custom.borderRadius.sm,
  background: theme.palette.common.white,
}));
