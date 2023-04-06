import { MockedProvider } from '@apollo/client/testing';
import { CssBaseline, ThemeProvider } from '@mui/material';
import defaultTheme from '../src/app/themes';

/* snipped for brevity */

export const withMuiTheme = (Story) => (
  <ThemeProvider theme={defaultTheme}>
    <CssBaseline />
    <Story />
  </ThemeProvider>
);

export const decorators = [withMuiTheme];

export const parameters = {
  apolloClient: {
    MockedProvider,
    // any props you want to pass to MockedProvider on every story
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    expanded: true, // Adds the description and default columns
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
