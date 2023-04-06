import { Theme } from '@mui/material';

export default (theme: Theme) => ({
  MuiTooltip: {
    styleOverrides: {
      tooltip: {
        border: `1px solid ${theme.palette.secondary.dark}`,
        backgroundColor: theme.palette.grey['200'],
        fontSize: theme.typography.pxToRem(15),
        lineHeight: 1,
        color: theme.palette.secondary.dark,
        letterSpacing: '-1',
        fontWeight: 700,
        padding: '5px 5px',
        textAlign: 'center',
        borderRadius: theme.custom.borderRadius.sm,

        '& a': {
          color: theme.palette.secondary.dark,
          fontWeight: 900,
        },
      },
    },
  },
});
