import { Box, Fade, Grid, LinearProgress, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FC } from 'react';
import { User } from 'features/user';
import { useLayout } from 'shared/providers/LayoutEffectsProvider';
import { mainHeaderHeight } from '../constants';
import Logo from '../logo';

const Header: FC = () => {
  const { assets } = useTheme();

  return (
    <StyledHeader>
      <Grid container columnSpacing={3} alignItems={'center'} px={3} height={'100%'}>
        <Grid xs={2} md={3} item>
          <Logo logoAsset={assets?.logo?.icon} />
        </Grid>
        <Grid item flexGrow={1}>
          {/* agency selector area */}
        </Grid>
        <Grid>
          <User />
        </Grid>
      </Grid>

      <ProgressWrapper />
    </StyledHeader>
  );
};

export default Header;

const loadingBarHeight = 4;

const ProgressWrapper = () => {
  const { isLoading } = useLayout();
  return (
    <Box
      sx={{
        position: 'absolute',
        width: '100%',
        top: mainHeaderHeight - loadingBarHeight,
        height: loadingBarHeight,
      }}
    >
      <Fade in={isLoading}>
        <LinearProgress />
      </Fade>
    </Box>
  );
};

export const StyledHeader = styled('header')`
  height: ${({ theme }) => theme.typography.pxToRem(mainHeaderHeight)};
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 100;
  align-items: center;
`;
