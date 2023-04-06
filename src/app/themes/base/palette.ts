import { Palette } from '@mui/material/styles';

export default {
  mode: 'light',
  primary: {
    main: '#2CA1FD',
    light: '#DDEEFB',
    dark: '#3D3D3D',
    contrastText: '#fff',
  },
  secondary: {
    main: '#5D95CB',
    dark: '#389FFF',
    contrastText: '#fff',
  },
  common: {
    black: '#212121',
  },
  grey: {
    200: '#F7FCFE',
    300: '#D1D1D6',
    400: '#A2A2A2',
    500: '#757575',
    600: '#636366',
    700: '#666',
  },
  background: {
    paper: '#F5F5F5',
    default: '#FFF',
  },
  success: {
    main: '#219653',
    light: '#00E5A1',
  },
  error: {
    main: '#EF4735',
  },
  custom: {
    background: {
      dark: '#1C1C1C',
    },
  },
} as Palette;
