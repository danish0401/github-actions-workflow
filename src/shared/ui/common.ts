import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

export const BasicRoundedGrid = styled(Grid)(({ theme }) => ({
  background: theme.palette.common.white,
  borderRadius: theme.custom.borderRadius.sm,
  display: 'flex',
  padding: theme.spacing(4),
  boxShadow: theme.shadows[1],
  flexGrow: 1,
}));
