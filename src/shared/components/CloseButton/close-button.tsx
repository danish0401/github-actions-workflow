import { FC } from 'react';
import Close from '@mui/icons-material/Close';
import { Box, IconButton } from '@mui/material';

type Props = {
  handleClose: () => void;
  top?: number;
  right?: number;
};

const CloseButton: FC<Props> = ({ handleClose, top = 2, right = 2 }) => {
  return (
    <Box
      sx={(theme) => ({
        position: 'absolute',
        top: theme.spacing(top),
        right: theme.spacing(right),
      })}
    >
      <IconButton onClick={handleClose} aria-label='close-button'>
        <Close />
      </IconButton>
    </Box>
  );
};

export default CloseButton;
