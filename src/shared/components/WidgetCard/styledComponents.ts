import { Card } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  background: theme.palette.common.white,
  boxShadow: theme.shadows[1],
  borderRadius: '40px',
  minHeight: 450,
  padding: theme.spacing(4, 5),
  height: '100%',
}));

export const StyledTitle = styled('div')(({ theme }) => ({
  color: theme.palette.common.black,
  fontWeight: 500,
  fontSize: theme.typography.pxToRem(20),
  textTransform: 'uppercase',
}));
