import merge from 'lodash/merge';
import { Theme } from '@mui/material/styles';
import themeBase from 'app/themes/base';
import variants, { LocalThemes } from './variants';

const DEFAULT_THEME = 'defaultTheme';
const { REACT_APP_THEME } = import.meta.env;

const givenTheme: keyof LocalThemes = REACT_APP_THEME?.toLowerCase() || DEFAULT_THEME;

let clientTheme;
try {
  clientTheme = (variants as LocalThemes)[givenTheme];
} catch (error) {
  console.error(error);
  clientTheme = {};
}

const theme = clientTheme || {};

export const currentSettings: Theme = merge(themeBase, theme) as unknown as Theme;
