import { Box, Link, Typography, styled } from '@mui/material';
import themes from 'app/themes';

type DisabledProps = {
  disabled: boolean;
};

export const StyledBox = styled(Link)<DisabledProps>(({ disabled }) => ({
  display: 'flex',
  alignItems: 'center',
  cursor: disabled ? 'default' : 'pointer',
  margin: themes.spacing(2),
  textDecoration: 'none',
  pointerEvents: disabled ? 'none' : 'auto',
}));

export const StyledIconBox = styled(Box)(({ theme }) => ({
  width: 64,
  height: 64,
  boxShadow: theme.shadows[1],
  marginRight: theme.spacing(2),
}));

export const StyledLabel = styled(Typography)<DisabledProps>(({ theme, disabled }) => ({
  fontWeight: 700,
  fontSize: theme.typography.pxToRem(12),
  lineHeight: theme.typography.pxToRem(14),
  letterSpacing: '0.01rem',
  color: disabled ? theme.palette.grey[400] : theme.palette.primary.dark,
  textTransform: 'uppercase',
  whiteSpace: 'pre',
}));

export const StyledWIPLabel = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  fontSize: theme.typography.pxToRem(10),
  lineHeight: theme.typography.pxToRem(12),
  letterSpacing: '0.01rem',
  textTransform: 'uppercase',
  color: theme.palette.grey[500],
}));
