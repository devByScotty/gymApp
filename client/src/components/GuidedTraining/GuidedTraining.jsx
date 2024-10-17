import React from 'react';
import { Box, Typography, Button } from '@mui/material';
//import imageSrc from '../../img/gyming-2.jpg'
//import imageSrc from '../../assets/img/home-background.jpg';

const GuidedTraining = ({ workoutTitle, duration, imageSrc }) => {
  imageSrc = 'https://images.unsplash.com/photo-1434682772747-f16d3ea162c3?q=80&w=1748&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  return (
    <Box
      sx={{
        padding: 2,
        backgroundColor: '#1a1a1a',
        textAlign: 'center',
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${imageSrc})`,
          backgroundSize: 'cover',
          height: 200,
          position: 'relative',
          borderRadius: 2,
        }}
      >
        <Button
          variant="contained"
          sx={{
            position: 'absolute',
            top: 16,
            left: 16,
            backgroundColor: '#C7FF00',
            color: '#000',
            '&:hover': {
              backgroundColor: '#A0D900',
            },
          }}
        >
          Recommended
        </Button>
        <Box
          sx={{
            position: 'absolute',
            bottom: 16,
            left: 16,
            color: '#fff',
          }}
        >
          <Typography variant="h5">{workoutTitle}</Typography>
          <Typography variant="subtitle2">{duration}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default GuidedTraining;
