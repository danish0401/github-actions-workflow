import { FC } from 'react';

import Alert from '@mui/material/Alert';
import { ResponseMessage } from 'shared/types/api';

type Props = ResponseMessage;

export const ResultMessage: FC<Props> = ({ text, level }) => {
  return <Alert severity={level}>{text}</Alert>;
};
