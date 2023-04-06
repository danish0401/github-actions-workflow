import { FC } from 'react';
import { Tooltip, Fab } from '@mui/material';
import { styled } from '@mui/material/styles';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

const StyledFab = styled(Fab)({
  position: 'fixed',
  bottom: 45,
  right: 45,
});

const FabButton: FC<{ onClick: () => void; tooltipTitle?: string }> = ({ onClick, tooltipTitle = '' }) => (
  <Tooltip title={tooltipTitle} placement='top-start'>
    <StyledFab color='primary' aria-label='fab-button' onClick={onClick}>
      <QuestionMarkIcon fontSize='large' />
    </StyledFab>
  </Tooltip>
);

export default FabButton;
