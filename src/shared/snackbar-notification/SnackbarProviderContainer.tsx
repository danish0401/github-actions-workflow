import { FC, useRef } from 'react';
import { SnackbarOrigin, Theme } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { SnackbarProvider, SnackbarProviderProps } from 'notistack';
import CloseIcon from '@mui/icons-material/Close';

const shared = {
  boxShadow: '0px 4px 40px rgba(106, 143, 184, 0.2) ! important',
  borderRadius: '20px !important',
  height: '70px !important',
};

const useStyles = makeStyles()((theme: Theme) => ({
  overriddenInfo: {
    color: `${theme.palette.primary.main} !important`,
    background: `${theme.palette.common.white} !important`,
    ...shared,
  },
  overriddenSuccess: {
    color: `${theme.palette.success.main} !important`,
    background: `${theme.palette.common.white} !important`,
    ...shared,
  },
  overriddenError: {
    color: `${theme.palette.error.main} !important`,
    background: `${theme.palette.common.white} !important`,
    ...shared,
  },
  containerRoot: {
    color: theme.palette.common.white,
  },
}));

const SnackbarProviderContainer: FC<ChildrenProps> = ({ children }) => {
  const { classes } = useStyles();
  const snackbarRef = useRef<SnackbarProvider>(null);
  const snackbarOptions: Omit<SnackbarProviderProps, 'children'> = {
    maxSnack: 3,
    anchorOrigin: {
      horizontal: 'right' as SnackbarOrigin['horizontal'],
      vertical: 'top' as SnackbarOrigin['vertical'],
    },
    action: (key) => (
      <CloseIcon
        style={{
          cursor: 'pointer',
        }}
        onClick={() => snackbarRef?.current?.closeSnackbar(key)}
      />
    ),
  };

  return (
    <SnackbarProvider
      classes={{
        containerRoot: classes.containerRoot,
        variantInfo: classes.overriddenInfo,
        variantError: classes.overriddenError,
        variantSuccess: classes.overriddenSuccess,
      }}
      ref={snackbarRef}
      {...snackbarOptions}
    >
      {children}
    </SnackbarProvider>
  );
};

export default SnackbarProviderContainer;
