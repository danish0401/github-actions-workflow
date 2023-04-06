import { Box } from '@mui/material';
import { FC } from 'react';
import { AHErrorType } from 'shared/types/rest';
import { StyledFormHelperText } from './styled';

export type MessagesComponentType = {
  error: AHErrorType[];
};
const MessagesComponent: FC<MessagesComponentType> = ({ error }) => {
  return (
    <Box mb={3} textAlign='center' width={'100%'}>
      {error.map((err) => (
        <StyledFormHelperText key={err.message} sx={{ textAlign: 'center' }}>
          {err.message}
        </StyledFormHelperText>
      ))}
    </Box>
  );
};

export default MessagesComponent;
