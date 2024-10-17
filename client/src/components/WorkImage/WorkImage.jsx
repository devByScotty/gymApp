import React from 'react';
import { Box, Typography } from '@mui/material';

const WorkoutImage = () => {
  return (
    <Box sx={{ position: 'relative' }}>
      <Box
        component="img"
        src="https://images.unsplash.com/photo-1550259979-ed79b48d2a30?q=80&w=1668&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  // Replace with your image path
        alt="Chest & Arms Workout"
        sx={{ width: '100%', height: 'auto' }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: 16,
          left: 16,
          color: '#fff',
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          Full Workout
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#C7FF00' }}>
          CHEST & ARMS
        </Typography>
      </Box>
    </Box>
  );
};

export default WorkoutImage;
