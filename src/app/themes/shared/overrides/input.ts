import { Theme } from '@mui/material/styles';

export default (theme: Theme) => ({
  MuiFilledInput: {
    styleOverrides: {
      root: {
        overflowX: 'hidden',
        backgroundColor: theme.palette.common.white,
        borderRadius: theme.custom.borderRadius.sm,
        '&:hover': {
          backgroundColor: theme.palette.common.white,
          '@media(hover:none)': {
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
          },
        },
        '&.focused': {
          backgroundColor: theme.palette.common.white,
        },
        '&.disabled': {
          backgroundColor: theme.palette.grey[300],
        },
      },
      input: {
        '&[type="number"]': {
          '-moz-appearance': 'textfield',
          '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
            '-webkit-appearance': 'none',
            margin: 0,
          },
        },
      },
    },
  },
  MuiInputLabel: {
    defaultProps: {
      variant: 'standard',
    },
  },
  MuiFormHelperText: {
    styleOverrides: {
      root: {
        '&.Mui-error': {
          position: 'absolute',
          top: '100%',
          margin: 'unset',
          lineHeight: 1,
        },
      },
    },
  },
  MuiTextField: {
    defaultProps: {
      variant: 'standard',
    },
  },
});
