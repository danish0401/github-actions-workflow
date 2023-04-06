import { DefaultTheme } from '@mui/private-theming';
import favicon from './images/favicon.ico';
import logo from './images/logo.svg';
import logoFooter from './images/logoFooter.svg';

export default {
  assets: {
    meta: {
      publicTitle: 'Compulse 360',
      publicFavicon: favicon,
    },
    logo: {
      icon: logo,
      iconFooter: logoFooter,
      alt: 'Compulse 360',
    },
  },
} as DefaultTheme;
