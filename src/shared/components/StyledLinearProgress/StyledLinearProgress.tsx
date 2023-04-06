import { LinearProgress } from '@mui/material';
import { FC } from 'react';
import { makeStyles } from 'tss-react/mui';

type Props = {
  progress: number;
  height: number;
};

const useStyles = makeStyles()((theme) => ({
  root: {
    background: theme.palette.grey[200],
    borderRadius: theme.custom.borderRadius.xs,
  },
  colorPrimary: {
    background: 'linear-gradient(45deg, #2CA1FD, #5D95CB)',
  },
}));

const StyledLinearProgress: FC<Props> = ({ progress, height }) => {
  const { classes } = useStyles();

  return (
    <LinearProgress
      classes={{
        root: classes.root,
        barColorPrimary: classes.colorPrimary,
      }}
      variant='determinate'
      value={progress}
      sx={{ height }}
    />
  );
};

export default StyledLinearProgress;
