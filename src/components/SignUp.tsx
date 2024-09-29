import React, { useState, useEffect } from 'react';
import {
  Avatar,
  Button,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
  Paper,
  IconButton,
  Tooltip,
  InputAdornment,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import InfoIcon from '@mui/icons-material/Info';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import axios from 'axios';
import API_BASE_URL from '../apiConfig';

const SignUp: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Delay redirect by 1 second to avoid fast redirects causing crashes
      setTimeout(() => {
        navigate('/dashboard');
      }, 1000); // 1 second delay
    }
  }, [navigate]);

  const validateName = (name: string) => /^[a-zA-Z\s]+$/.test(name);
  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePassword = (password: string) =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // Validation
    if (!validateName(name)) {
      setErrorMessage('Name should not include numbers or special characters.');
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email.');
      return;
    }

    if (!validatePassword(password)) {
      setErrorMessage(
        'Password must be at least 8 characters, include one uppercase letter, one lowercase letter, one number, and one special character.'
      );
      return;
    }

    setErrorMessage('');

    try {
      const response = await axios.post(`${API_BASE_URL}/user/signup`, { name, email, password });
      if (response.status === 201 || response.status === 200) {
        const { accessToken } = response.data;
        localStorage.setItem('token', accessToken);
        setSuccessMessage('Logged in successfully.');
        navigate('/dashboard');
      } else {
        setErrorMessage('Failed to sign up. Please try again.');
      }
    } catch (error: any) {
      setErrorMessage('Failed to sign up. Please try again.');
    }
  };

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={6} sx={{ mt: 8, p: 4, borderRadius: 2 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>

          {/* Display Error Message */}
          {errorMessage && (
            <Typography variant="body2" color="error" align="center" sx={{ mt: 2 }}>
              {errorMessage}
            </Typography>
          )}

          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            {/* Name Field with Tooltip */}
            <TextField
              margin="normal"
              required
              fullWidth
              label="Full Name"
              autoComplete="name"
              autoFocus
              value={name}
              onChange={(e) => setName(e.target.value)}
              InputProps={{
                endAdornment: (
                  <Tooltip title="Name should not contain numbers or special characters.">
                    <IconButton>
                      <InfoIcon />
                    </IconButton>
                  </Tooltip>
                ),
              }}
            />

            {/* Email Field with Tooltip */}
            <TextField
              margin="normal"
              required
              fullWidth
              label="Email Address"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputProps={{
                endAdornment: (
                  <Tooltip title="Please enter a valid email.">
                    <IconButton>
                      <InfoIcon />
                    </IconButton>
                  </Tooltip>
                ),
              }}
            />

            {/* Password Field with Toggle Visibility Icon */}
            <TextField
              margin="normal"
              required
              fullWidth
              label="Password"
              type={showPassword ? 'text' : 'password'} // Toggle between text and password
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                endAdornment: (
                  <>
                    <Tooltip title="Password must be 8+ characters with upper, lower, number, and special characters.">
                      <IconButton>
                        <InfoIcon />
                      </IconButton>
                    </Tooltip>
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </>
                ),
              }}
            />

            <Button type="submit" fullWidth variant="contained" sx={{ mt: 2, mb: 2 }}>
              Sign Up
            </Button>

            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/" style={{ textDecoration: 'none' }}>
                  <Typography variant="body2">Already have an account? Sign in</Typography>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default SignUp;
