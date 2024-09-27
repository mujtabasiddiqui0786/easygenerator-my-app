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
import logo from '../assets/logo.png';
import Header from './Header';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  // return (
  //   <Box sx={{ display: 'flex' }}>
  //     <CssBaseline />
  //     <AppBar position="fixed">
  //       <Toolbar>
  //         {/* Logo */}
  //         <Box
  //           component="img"
  //           sx={{
  //             height: 40,
  //             width: 40,
  //             mr: 2,
  //           }}
  //           alt="Logo"
  //           src={logo}
  //         />
  //         <Typography variant="h6" sx={{ flexGrow: 1 }}>
  //           Dashboard
  //         </Typography>
  //         {/* Theme Toggle Button */}
  //         <IconButton
  //           sx={{ ml: 1 }}
  //           color="inherit"
  //           onClick={colorMode.toggleColorMode}
  //         >
  //           {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
  //         </IconButton>
  //         <Button color="inherit" onClick={handleLogout}>
  //           Logout
  //         </Button>
  //       </Toolbar>
  //     </AppBar>
  //     <Box
  //       component="main"
  //       sx={{ flexGrow: 1, p: 3, mt: 8 }}
  //     >
  //       <Container maxWidth="lg">
  //         {/* Place your dashboard content here */}
  //         <Typography variant="h4" gutterBottom>
  //           Welcome to your Dashboard
  //         </Typography>
  //         {/* Additional components and content */}
  //       </Container>
  //     </Box>
  //   </Box>
  // );
// };
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Header />
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
