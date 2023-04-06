import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ConfirmationMessageWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flex: '1 0 100%',
  height: `calc(100% + ${theme.spacing(6)})`,
  width: 'auto',
  backgroundColor: theme.palette.grey['200'],
}));

export const StyledMessageBox = styled('div')`
  max-width: 500px;

  & a {
    color: ${({ theme }) => theme.palette.primary.main};
    text-decoration: unset;
    font-variation-settings: 'wght' 700;

    &:visited {
      color: ${({ theme }) => theme.palette.primary.main};
    }
  }
`;

export const StyledHighlightOffIcon = styled(HighlightOffRoundedIcon)(() => ({
  width: '100px',
  height: '100px',
}));

export const StyledCheckCircleOutlineIcon = styled(CheckCircleOutlineRoundedIcon)(({ theme }) => ({
  width: '100px',
  height: '100px',
  color: theme.palette.success.light,
}));
