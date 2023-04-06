import { Theme } from '@mui/material/styles';

export default (theme: Theme) => ({
  MuiTable: {
    styleOverrides: {
      root: {
        borderCollapse: 'separate',
        borderSpacing: '0 1px',
      },
    },
  },
  MuiTableRow: {
    styleOverrides: {
      root: {
        '&:nth-of-type(even)': {
          backgroundColor: '#FBFBFD',
        },
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.common.white,
        },
      },
      head: {
        '&:nth-of-type(even), &:nth-of-type(odd)': {
          backgroundColor: '#FBFBFD',
        },
      },
    },
  },
  MuiTableCell: {
    styleOverrides: {
      root: {
        borderBottom: 'none',
        fontSize: theme.typography.pxToRem(14),
        fontWeight: 400,
        lineHeight: 1.46,
        padding: theme.spacing(2),
        '&:first-child': {
          borderTopLeftRadius: theme.custom.borderRadius.xs,
          borderBottomLeftRadius: theme.custom.borderRadius.xs,
        },

        '&:last-child': {
          borderTopRightRadius: theme.custom.borderRadius.xs,
          borderBottomRightRadius: theme.custom.borderRadius.xs,
        },
      },
      head: {
        color: '#272727',
      },
      body: {
        color: '#272727',
      },
      footer: {
        color: '#272727',
      },
    },
  },
});
