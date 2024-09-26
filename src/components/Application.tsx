// src/components/Application.tsx
import { Container, Typography, Box } from '@mui/material';

const Application = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 8, textAlign: 'center' }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Welcome to the Application
        </Typography>
        <Typography variant="h5">
          You have successfully logged in.
        </Typography>
      </Box>
    </Container>
  );
};

export default Application;