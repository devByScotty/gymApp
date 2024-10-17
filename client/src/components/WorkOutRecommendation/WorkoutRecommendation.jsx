import React, { useEffect, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import axios from 'axios';

const WorkoutRecommendation = ({ setSelectedWorkout }) => {
  const [bodyParts, setBodyParts] = useState([]);

  // Fetch body parts from the API
  useEffect(() => {
    const fetchBodyParts = async () => {
      try {
        const response = await axios.get('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', {
          headers: {
            'x-rapidapi-key': 'bc599bb1demshf61171446bed130p11b96fjsnbfcdab82b4ad',
            'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
          },
        });
        setBodyParts(response.data); // Assume this is an array of body parts
      } catch (error) {
        console.error('Error fetching body parts:', error);
      }
    };

    fetchBodyParts();
  }, []);

  const handleRecommendationClick = (bodyPart) => {
    setSelectedWorkout(bodyPart);
  };

  return (
    <Box>
      <Typography variant="h6" sx={{ mt: 3 }}>
        Workout Recommendations
      </Typography>

      {/* Dynamically generate buttons for each body part */}
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', mt: 2 }}>
        {bodyParts.length > 0 ? (
          bodyParts.map((bodyPart, index) => (
            <Button
              key={index}
              variant="contained"
              sx={{
                backgroundColor: '#C7FF00',
                color: '#000',
                margin: 1,
                '&:hover': { backgroundColor: '#A0D900' },
              }}
              onClick={() => handleRecommendationClick(bodyPart)}
            >
              {bodyPart.charAt(0).toUpperCase() + bodyPart.slice(1)} {/* Capitalize */}
            </Button>
          ))
        ) : (
          <Typography variant="body2" sx={{ color: '#fff' }}>
            Loading body parts...
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default WorkoutRecommendation;

