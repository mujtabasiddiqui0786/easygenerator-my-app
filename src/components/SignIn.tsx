// src/components/SignIn.tsx
import React, { useState, useEffect } from 'react';
import {
  Avatar,
  Button,
  TextField,
  Link as MuiLink,
  Grid,
  Box,
  Typography,
  Container,
  Paper,
  Alert,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import API_BASE_URL from '../apiConfig';
import logo from '../assets/logo.png';
import Header from './Header';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in (e.g., check if JWT token is in localStorage)
    const token = localStorage.getItem('token');
    if (token) {
      // If logged in, redirect to dashboard
      navigate('/dashboard');
    }
  }, [navigate]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    // Basic validation rules
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!emailRegex.test(email)) {
      setErrorMessage('Please enter a valid email.');
      return;
    }
    if (!passwordRegex.test(password)) {
      setErrorMessage('Password must be at least 8 characters, include one uppercase letter, one lowercase letter, one number, and one special character.');
      return;
    }
    try {
      const response = await axios.post(`${API_BASE_URL}/user/signin`, { email, password });
      const { accessToken, userId } = response.data;
      localStorage.setItem('token', accessToken);
      localStorage.setItem('userId', userId);
      setSuccessMessage('Logged in successfully.');
      navigate('/dashboard');
    } catch (error: any) {
      if (error.response && error.response.data && error.response.data.message) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage('An error occurred during sign in.');
      }
    }
  };

  return (
    <>
      <Header />
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Container component="main" maxWidth="xs">
          <Paper elevation={6} sx={{ p: 4, borderRadius: 2 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Box
                component="img"
                sx={{
                  height: 64,
                  width: 64,
                  m: 1,
                }}
                alt="Logo"
                src={logo}
              />
              <Typography component="h1" variant="h5">
                Sign In
              </Typography>
              {errorMessage && (
                <Alert severity="error" sx={{ mt: 2, width: '100%' }}>
                  {errorMessage}
                </Alert>
              )}
              {successMessage && (
                <Alert severity="success" sx={{ mt: 2, width: '100%' }}>
                  {successMessage}
                </Alert>
              )}
              <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  label="Email Address"
                  autoComplete="email"
                  autoFocus
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button type="submit" fullWidth variant="contained" sx={{ mt: 2, mb: 2 }}>
                  Sign In
                </Button>
                <Grid container justifyContent="space-between">
                  <Grid item>
                    <MuiLink href="#" variant="body2">
                      Forgot password?
                    </MuiLink>
                  </Grid>
                  <Grid item>
                    <Link to="/signup" style={{ textDecoration: 'none' }}>
                      <Typography variant="body2">{"Don't have an account? Sign Up"}</Typography>
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Paper>
        </Container>
      </Box>
    </>
  );
};

export default SignIn;
