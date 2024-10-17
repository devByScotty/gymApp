import React from 'react';
import { Box, Typography, Chip } from '@mui/material';

const WorkoutDetails = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Chip label="2h" sx={{ mr: 1, backgroundColor: '#333', color: '#fff' }} />
        <Chip label="Dumbbell flyes" sx={{ mr: 1, backgroundColor: '#333', color: '#fff' }} />
        <Chip label="Bryan" sx={{ backgroundColor: '#333', color: '#fff' }} />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="subtitle2" sx={{ color: '#999' }}>
          Dynamic Warmup
        </Typography>
        <Typography variant="subtitle2">22 min</Typography>
      </Box>
    </Box>
  );
};

export default WorkoutDetails;
