import { CacheProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import { FC } from 'react';
import createCache from '@emotion/cache';
import defaultTheme from 'app/themes';

export const muiCache = createCache({
  key: 'mui',
  prepend: true,
});

const withMui = <P extends object>(Component: FC<P>): FC<P> => {
  return function WithMui(props) {
    return (
      <CacheProvider value={muiCache}>
        <StyledEngineProvider injectFirst>
          <ThemeProvider<typeof defaultTheme> theme={defaultTheme}>
            <CssBaseline />
            <Component {...props} />
          </ThemeProvider>
        </StyledEngineProvider>
      </CacheProvider>
    );
  };
};
export default withMui;
