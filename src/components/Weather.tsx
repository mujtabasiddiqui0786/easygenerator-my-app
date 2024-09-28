// src/components/Weather.tsx
import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, CircularProgress } from '@mui/material';
import apiClient from '../apiClient';
import BackButton from './BackButton';

interface WeatherData {
  city: string;
  temperature: number;
  description: string;
}

const Weather: React.FC = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGetWeather = async () => {
    setLoading(true);
    setError('');
    setWeather(null);
    const token = localStorage.getItem('token'); // Get the token from localStorage

    try {
      const response = await apiClient.get(`/weather?city=${encodeURIComponent(city)}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Include the JWT token in the Authorization header
        },
      });
      setWeather(response.data);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Error fetching weather data.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <BackButton />
      <Typography variant="h4" gutterBottom>
        Weather Checker
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
        <TextField
          label="City"
          variant="outlined"
          fullWidth
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <Button variant="contained" onClick={handleGetWeather}>
          Get Weather
        </Button>
      </Box>
      {loading && <CircularProgress />}
      {error && (
        <Typography variant="body1" color="error" sx={{ mt: 2 }}>
          {error}
        </Typography>
      )}
      {weather && (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h5">{weather.city}</Typography>
          <Typography variant="body1">Temperature: {weather.temperature}°C</Typography>
          <Typography variant="body1">Description: {weather.description}</Typography>
        </Box>
      )}
    </Container>
  );
};

export default Weather;
