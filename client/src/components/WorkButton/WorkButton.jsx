import React, { useState } from 'react';
import { Button, Box, CircularProgress } from '@mui/material';
import axios from 'axios';

const WorkoutButton = ({ setWorkoutPlan }) => {
  const [loading, setLoading] = useState(false);

  const handleWorkoutClick = async () => {
    setLoading(true);
      try {
        const options = {
          method: 'GET',
          url: 'https://exercisedb.p.rapidapi.com/exercises',
          headers: {
            'x-rapidapi-key': 'bc599bb1demshf61171446bed130p11b96fjsnbfcdab82b4ad',
            'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
          },
        };

        const response = await axios.request(options);
        // You can filter or map this data to create a user-specific workout plan
        const filteredWorkoutPlan = response.data.slice(0, 5); // Example: Limiting to 5 exercises for now
        setWorkoutPlan(filteredWorkoutPlan);
      }
    
    
    catch (error) {
      console.error('Error fetching new workout plan:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', my: 3 }}>
      <Button
        variant="contained"
        sx={{
          backgroundColor: '#C7FF00',
          color: '#000',
          '&:hover': { backgroundColor: '#A0D900' },
        }}
        onClick={handleWorkoutClick}
        disabled={loading}  // Disable button when loading
      >
        {loading ? <CircularProgress color="secondary" size={24} /> : 'Time to Workout'}
      </Button>
    </Box>
  );
};

export default WorkoutButton;
