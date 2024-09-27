// src/components/Dashboard.tsx
import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg" sx={{ mt: 8 }}>
      <Typography variant="h4" gutterBottom>
        Welcome to your Dashboard
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardActionArea onClick={() => navigate('/weather')}>
              <CardContent>
                <Typography variant="h5" component="div">
                  Check Weather for a City
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Get the current weather information for any city.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardActionArea onClick={() => navigate('/easygeneratorgpt')}>
              <CardContent>
                <Typography variant="h5" component="div">
                  EasyGeneratorGPT
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Generate content easily using GPT technology.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
