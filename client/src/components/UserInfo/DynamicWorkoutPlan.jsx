import React, { useEffect, useState } from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';
import axios from 'axios';

const DynamicWorkoutPlan = ({ userId }) => {
  const [workoutPlan, setWorkoutPlan] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWorkoutPlan = async () => {
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
      } catch (error) {
        console.error('Error fetching workout plan:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchWorkoutPlan();
  }, [userId]);

  if (loading) {
    return <CircularProgress color="secondary" />;
  }

  return (
    <Box sx={{ mt: 3 }}>
      {workoutPlan.length > 0 ? (
        workoutPlan.map((exercise, index) => (
          <Box
            key={index}
            sx={{
              backgroundColor: '#333',
              borderRadius: 2,
              p: 2,
              mt: 2,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Typography variant="h6" sx={{ color: '#C7FF00' }}>
              {exercise.name}
            </Typography>
            <Typography variant="body2">{exercise.target}</Typography>
            <Typography variant="caption" color="textSecondary">
              Equipment: {exercise.equipment}
            </Typography>
          </Box>
        ))
      ) : (
        <Typography variant="subtitle1">No workout plan available. Please create one!</Typography>
      )}
    </Box>
  );
};

export default DynamicWorkoutPlan;
