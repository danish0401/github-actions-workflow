import { Typography, styled } from '@mui/material';

export const StyledProfuctsLabel = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.pxToRem(12),
  lineHeight: theme.typography.pxToRem(15),
  textAlign: 'center',
  fontWeight: '700',
  letterSpacing: '0.56rem',
  textTransform: 'uppercase',
}));
