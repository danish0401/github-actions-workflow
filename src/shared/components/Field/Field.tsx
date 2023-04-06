import { Box } from '@mui/material';
import { FC, ReactNode } from 'react';
import { FieldLabel, FieldValue } from 'shared/components/Field/styledComponents';

const Field: FC<{
  label: ReactNode;
  value: ReactNode;
}> = ({ label, value, ...styleProps }) => (
  <Box display='flex' flexDirection='column' {...styleProps}>
    <FieldLabel>{label}</FieldLabel>
    <Box>
      <FieldValue>{value}</FieldValue>
    </Box>
  </Box>
);

export default Field;
