import { styled } from '@mui/material/styles';
import { Button, Modal, Stack } from '@mui/material';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';

export const StyledModal = styled(Modal)({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
});

export const StyledContainer = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.custom.borderRadius.sm,
  display: 'flex',
  flex: '0 0 auto',
  flexDirection: 'column',
  padding: theme.spacing(3),
  maxWidth: '100%',
  position: 'relative',

  '&:focus': {
    outline: 'none',
  },
}));

export const StyledSuccessModal = styled(Stack)(({ theme }) => ({
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(3, 4, 1),
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  width: 120,
  marginLeft: 'auto',
  marginTop: theme.spacing(3),
}));

export const StyledCheckCircleOutlineIcon = styled(CheckCircleOutlineRoundedIcon)(({ theme }) => ({
  width: 100,
  height: 100,
  color: theme.palette.success.light,
  margin: theme.spacing(3, 0),
}));

export const StyledTitle = styled('h1')(({ theme }) => ({
  fontSize: theme.typography.pxToRem(20),
}));

export const StyledSubTitle = styled('h2')(({ theme }) => ({
  fontSize: theme.typography.pxToRem(25),
  fontWeight: 800,
  alignSelf: 'center',
}));
