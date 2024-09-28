// src/components/EasyGeneratorGPT.tsx
import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, CircularProgress } from '@mui/material';
import apiClient from '../apiClient';

const EasyGeneratorGPT: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerate = async () => {
    if (!prompt.trim()) return;

    setLoading(true);
    setError('');
    setOutput('');
    try {
      const response = await apiClient.post('/generate', { prompt });
      setOutput(response.data.output);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Error generating content.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 8 }}>
      <Typography variant="h4" gutterBottom>
        EasyGeneratorGPT
      </Typography>
      <TextField
        label="Enter your prompt"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button variant="contained" onClick={handleGenerate} disabled={!prompt || loading}>
        {loading ? <CircularProgress size={24} /> : 'Generate Content'}
      </Button>
      {error && (
        <Typography variant="body1" color="error" sx={{ mt: 2 }}>
          {error}
        </Typography>
      )}
      {output && (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h5">Generated Content:</Typography>
          <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap' }}>
            {output}
          </Typography>
        </Box>
      )}
    </Container>
  );
};

export default EasyGeneratorGPT;
