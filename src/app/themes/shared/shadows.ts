import { Theme } from '@mui/material';

export default (theme: Theme) => {
  theme.shadows[1] = '0px 16px 16px rgba(0, 0, 0, 0.02)';

  return theme.shadows;
};
