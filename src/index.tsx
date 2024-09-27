// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CssBaseline } from '@mui/material';
import CustomThemeProvider from './ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <CustomThemeProvider>
    <CssBaseline />
    <App />
  </CustomThemeProvider>
);
