// src/components/Layout.tsx
import React from 'react';
import Header from './Header';
import { Box } from '@mui/material';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <Box sx={{ mt: 8 }}>
        {children}
      </Box>
    </>
  );
};

export default Layout;
