import { createTheme } from '@mui/material/styles';
import { currentSettings } from './currentTheme';

import { getOverrides, getShadows } from './shared';

const theme = createTheme(currentSettings);

export default createTheme(theme, {
  ...theme,
  shadows: getShadows(theme),
  components: { ...currentSettings.components, ...getOverrides(theme) },
});
