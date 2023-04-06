import { Theme } from '@mui/material/styles';

export default (theme: Theme) => ({
  MuiPaginationItem: {
    styleOverrides: {
      textSecondary: {
        '&.Mui-selected': {
          backgroundColor: theme.palette.primary.main,
        },
      },
      rounded: {
        backgroundColor: theme.palette.common.white,
        '&[aria-label="Go to next page"]': {
          backgroundColor: 'transparent',
        },
        '&[aria-label="Go to previous page"]': {
          backgroundColor: 'transparent',
        },
        '&.Mui-selected': {
          color: theme.palette.common.white,
        },
      },
    },
  },
});
