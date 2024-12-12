import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#ffffff',
      paper: '#f5f5f5',
    },
    text: {
      primary: '#000000',
    },
    primary: {
      main: '#1a73e8',
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#000000',
      paper: '#1c1c1c',
    },
    text: {
      primary: '#ffffff',
    },
    primary: {
      main: '#bb86fc',
    },
  },
});

export type Theme = typeof lightTheme;
