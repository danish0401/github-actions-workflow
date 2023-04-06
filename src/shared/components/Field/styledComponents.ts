import { styled } from '@mui/material/styles';

export const FieldLabel = styled('div')(({ theme }) => ({
  fontSize: theme.typography.pxToRem(12),
  lineHeight: '16px',
  letterSpacing: '0.4px',
  color: theme.palette.grey[700],
  paddingRight: theme.spacing(0.5),
  whiteSpace: 'nowrap',
}));

export const FieldValue = styled('div')({
  display: 'flex',
  alignItems: 'center',
  lineHeight: 1.6,
  letterSpacing: '0.15px',
});
