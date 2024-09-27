// src/theme.ts
import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2', // Customize as needed
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    // ... your typography settings
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9', // Adjust colors for dark mode
    },
    secondary: {
      main: '#f48fb1',
    },
    background: {
      default: '#121212',
    },
  },
  typography: {
    // ... your typography settings
  },
});

export { lightTheme, darkTheme };
