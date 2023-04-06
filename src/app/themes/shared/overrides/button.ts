import { Theme } from '@mui/material/styles';

export default (theme: Theme) => ({
  MuiButton: {
    styleOverrides: {
      contained: {
        boxShadow: 'none',
        '&:hover': {
          boxShadow: 'none',
        },
      },

      root: {
        textTransform: 'unset',
        borderRadius: theme.custom.borderRadius.sm,
        fontVariationSettings: '"wght" 600',
        fontSize: theme.typography.pxToRem(16),
        fontWeight: 600,
        letterSpacing: '-1',
      },
      sizeLarge: {
        fontSize: theme.typography.pxToRem(14),
      },
      sizeSmall: {
        fontSize: theme.typography.pxToRem(11),
      },
    },
    variants: [
      {
        props: { variant: 'accent' },
        style: {
          backgroundImage: 'linear-gradient(90deg, #ED5427 0%, #E00D7B 100%)',
          color: theme.palette.primary.contrastText,
          borderRadius: theme.custom.borderRadius.sm,
          // '&:hover': {
          //   background: alpha(theme.palette.primary.main, 0.9),
          // },
          // "&.Mui-disabled": {
          //   background: theme.palette.grey[200],
          // },
        },
      },
    ],
  },
});
