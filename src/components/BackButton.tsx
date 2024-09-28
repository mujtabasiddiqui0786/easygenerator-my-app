import React from 'react';
import { Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

const BackButton: React.FC = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // Go to the previous page
  };

  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={<ArrowBackIcon />}
      onClick={handleBackClick}
      sx={{
        mt: 2,
        mb: 2,
        bgcolor: '#1976d2',
        '&:hover': {
          bgcolor: '#1565c0',
        },
        padding: '10px 20px',
        borderRadius: '20px',
        boxShadow: '0 3px 5px rgba(0,0,0,0.3)',
      }}
    >
      Back
    </Button>
  );
};

export default BackButton;
