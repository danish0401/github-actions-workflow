import { Component, ReactNode } from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';

type Props = {
  children: ReactNode;
};

type State = {
  hasError: boolean;
};

const onItMessage = 'Unknown Error. We already working on it, please update the page in 5 minutes.';

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  public static getDerivedStateFromError(): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  render(): ReactNode {
    const { state, props } = this;
    if (state.hasError) {
      // You can render any custom fallback UI
      return (
        <Box
          sx={{
            width: '100%',
            minHeight: '100vh',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Grid>
            <Typography variant='overline' display='block' gutterBottom>
              {onItMessage}
            </Typography>
          </Grid>
          <Grid>
            <Button variant='outlined' color='secondary' onClick={() => window.location.reload()}>
              Reload page
            </Button>
          </Grid>
        </Box>
      );
    }

    return props.children;
  }
}

export default ErrorBoundary;
