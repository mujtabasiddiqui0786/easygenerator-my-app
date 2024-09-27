// src/components/Header.tsx
import React, { useContext } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Button,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ColorModeContext } from '../ThemeContext';
import { useTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import logo from '../assets/logo.png';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();

  const isAuthenticated = !!localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Box
          component="img"
          sx={{
            height: 40,
            width: 40,
            mr: 2,
            cursor: 'pointer',
          }}
          alt="Logo"
          src={logo}
          onClick={() => navigate('/')}
        />
        <Typography variant="h6" sx={{ flexGrow: 1, cursor: 'pointer' }} onClick={() => navigate('/')}>
          EasyGenerator
        </Typography>
        <IconButton 
          sx={{ ml: 1 }}
          color="inherit"
          onClick={colorMode.toggleColorMode}
        >
          {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
        {isAuthenticated ? (
          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        ) : (
          <>
            <Button color="inherit" onClick={() => navigate('/signup')}>
              Sign Up
            </Button>
            <Button color="inherit" onClick={() => navigate('/')}>
              Sign In
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
