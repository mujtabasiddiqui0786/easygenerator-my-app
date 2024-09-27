// src/components/Dashboard.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import API_BASE_URL from '../apiConfig';
import { useNavigate } from 'react-router-dom';
import { Typography, Container, Box, Button } from '@mui/material';
import apiClient from '../apiClient';

const Dashboard: React.FC = () => {
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      // If there's no token, redirect to login
      navigate('/');
    }

    // Fetch data from a protected route
    // const fetchData = async () => {
    //   try {
    //     const response = await axios.get(`${API_BASE_URL}/dashboard`, {
    //       headers: {
    //         Authorization: `Bearer ${token}`,
    //       },
    //     });
    //     setMessage(response.data.message);
    //   } catch (error) {
    //     console.error(error);
    //     // If there's an error (e.g., invalid token), redirect to login
    //     navigate('/');
    //   }
    // };

    const fetchData = async () => {
      try {
        const response = await apiClient.get('/dashboard');
        setMessage(response.data.message);
      } catch (error) {
        console.error(error);
        navigate('/');
      }
    };

    fetchData();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 8, textAlign: 'center' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Dashboard
        </Typography>
        <Typography variant="h6">{message}</Typography>
        <Button variant="contained" color="primary" onClick={handleLogout} sx={{ mt: 4 }}>
          Logout
        </Button>
      </Box>
    </Container>
  );
};

export default Dashboard;
