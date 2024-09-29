// src/components/Dashboard.tsx
import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardActionArea,
  CardMedia,
  Button,
  IconButton,
  Avatar,
  CircularProgress,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import MenuIcon from '@mui/icons-material/Menu';
import weather from '../assets/weather.png';
import gtp from '../assets/gpt.png';

const Dashboard: React.FC = () => {
  const [userDetails, setUserDetails] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');

    if (!token || !userId) {
      navigate('/signin'); // Redirect to sign-in if not logged in
    } else {
      // Fetch user details by ID
      axios
        .get(`${process.env.REACT_APP_BACKEND_URL}/user/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setUserDetails(response.data);
        })
        .catch((err) => {
          console.error(err);
          setError('Failed to fetch user details.');
        });
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    navigate('/signin');
  };

  if (error) {
    return (
      <Container maxWidth="md" sx={{ mt: 8 }}>
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      </Container>
    );
  }

  if (!userDetails) {
    return (
      <Container maxWidth="md" sx={{ mt: 8, textAlign: 'center' }}>
        <CircularProgress />
      </Container>
    );
  }

  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Welcome back, {userDetails.name}! , {userDetails.email}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          Here's what's available for you:
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                '&:hover': {
                  boxShadow: 6,
                },
              }}
            >
              <CardActionArea onClick={() => navigate('/weather')}>
                <CardMedia
                  component="img"
                  height="160"
                  image={weather}
                  alt="Weather"
                />
                <CardContent>
                  <Typography variant="h5" component="div">
                    Weather Checker
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Get the current weather information for any city.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                '&:hover': {
                  boxShadow: 6,
                },
              }}
            >
              <CardActionArea onClick={() => navigate('/easygeneratorgpt')}>
                <CardMedia
                  component="img"
                  height="160"
                  image={gtp}
                  alt="EasyGeneratorGPT"
                />
                <CardContent>
                  <Typography variant="h5" component="div">
                    EasyGeneratorGPT
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Generate content effortlessly using GPT technology.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          {/* Add more cards as needed */}
        </Grid>
      </Container>
    </>
  );
};

export default Dashboard;
