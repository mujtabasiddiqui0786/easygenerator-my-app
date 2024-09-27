// src/components/Dashboard.tsx
import React, { useContext } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Container,
  CssBaseline,
  Button,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import { ColorModeContext } from '../ThemeContext';
import { useTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';


const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            // onClick={handleDrawerToggle} // For sidebar menu if needed
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>
          <IconButton
            sx={{ ml: 1 }}
            color="inherit"
            onClick={colorMode.toggleColorMode}
          >
            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, mt: 8 }}
      >
        <Container maxWidth="lg">
          {/* Place your dashboard content here */}
          <Typography variant="h4" gutterBottom>
            Welcome to your Dashboard
          </Typography>
          {/* Additional components and content */}
        </Container>
      </Box>
    </Box>
  );
};

export default Dashboard;
