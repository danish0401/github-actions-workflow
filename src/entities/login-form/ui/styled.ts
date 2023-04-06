import { Box, Button, FormHelperText, InputLabel, OutlinedInput, Link } from '@mui/material';
import { styled } from '@mui/material/styles';

const FORM_MAX_WIDTH = 750;

export const StyledBox = styled(Box)`
  border-radius: ${({ theme }) => theme.custom.borderRadius.lg};
  background: ${({ theme }) => theme.palette.common.white};
  display: flex;
  margin: auto;
  flex-direction: column;
  width: 100%;
  padding: ${({ theme }) => theme.spacing(6, 4)};

  ${({ theme }) => theme.breakpoints.up('xl')} {
    padding: ${({ theme }) => theme.spacing(6, 7)};
    max-width: ${({ theme }) => theme.typography.pxToRem(FORM_MAX_WIDTH)};
  }
`;

export const StyledInputLabel = styled(InputLabel)(({ theme }) => ({
  marginBottom: theme.spacing(1),
}));

export const StyledTextField = styled(OutlinedInput)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderColor: theme.palette.background.paper,
  borderRadius: theme.custom.borderRadius.sm,
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: theme.palette.background.paper,
      borderRadius: theme.custom.borderRadius.sm,
    },
  },
}));

export const StyledSSOButton = styled(Button)(({ theme }) => ({
  borderRadius: theme.custom.borderRadius.lg,
  borderColor: theme.palette.grey[400],
  color: theme.palette.primary.dark,
  fontSize: theme.typography.pxToRem(14),
  height: 40,
  width: '100%',
}));

export const StyledFormHelperText = styled(FormHelperText)(({ theme }) => ({
  color: theme.palette.error.main,
}));

export const StyledRecoveryLink = styled(Link)(({ theme }) => ({
  fontSize: theme.typography.pxToRem(14),
  color: theme.palette.primary.dark,
  fontWeight: 400,
  font: theme.typography.fontFamily,
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
}));
