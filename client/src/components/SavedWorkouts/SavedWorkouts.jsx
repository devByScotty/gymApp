// SavedWorkouts.js
import React from 'react';
import { Box, Typography } from '@mui/material';

const SavedWorkouts = ({ workouts }) => {
    return (
      <div>
        <Typography variant="h6" sx={{ mt: 4 }}>
          Saved Workouts
        </Typography>
        {workouts.length > 0 ? (
          workouts.map((workout, index) => (
            <Box key={index} sx={{ my: 2 }}>
              <Typography variant="subtitle1">{workout.name}</Typography>
              <Typography variant="body2">Duration: {workout.duration} mins</Typography>
              <Typography variant="body2">Exercises: {workout.exercises.join(', ')}</Typography>
            </Box>
          ))
        ) : (
          <Typography>No saved workouts yet.</Typography>
        )}
      </div>
    );
  };
  
  export default SavedWorkouts;
  
