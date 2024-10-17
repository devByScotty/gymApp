import React from 'react';
import { Box, Typography, Card, CardMedia, CardContent, List, ListItem } from '@mui/material';

const ExerciseList = ({ exercises }) => {
  return (
    <Box sx={{ mt: 3 }}>
      {exercises.length > 0 ? (
        exercises.map((exercise, index) => (
          <Card
            key={index}
            sx={{
              backgroundColor: '#333',
              borderRadius: 2,
              p: 2,
              mt: 2,
              display: 'flex',
              flexDirection: 'column',
              color: '#fff',
            }}
          >
            {/* Exercise GIF or Image */}
            <CardMedia
              component="img"
              image={exercise.gifUrl}
              alt={exercise.name}
              sx={{ borderRadius: 2, maxHeight: 200, objectFit: 'contain' }}
            />

            {/* Exercise Name */}
            <CardContent>
              <Typography variant="h6" sx={{ color: '#C7FF00' }}>
                {exercise.name}
              </Typography>

              {/* Body Part and Equipment */}
              <Typography variant="body2" sx={{ color: '#ddd', mt: 1 }}>
                Body Part: {exercise.bodyPart} | Equipment: {exercise.equipment}
              </Typography>

              {/* Primary and Secondary Muscles */}
              <Typography variant="body2" sx={{ color: '#aaa', mt: 1 }}>
                Target: {exercise.target} | Secondary Muscles: {exercise.secondaryMuscles.join(', ')}
              </Typography>

              {/* Instructions */}
              <Typography variant="subtitle2" sx={{ color: '#fff', mt: 1 }}>
                Instructions:
              </Typography>
              <List sx={{ color: '#ddd', pl: 2 }}>
                {exercise.instructions.map((instruction, idx) => (
                  <ListItem key={idx} sx={{ display: 'list-item', listStyleType: 'disc' }}>
                    {instruction}
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        ))
      ) : (
        <Typography variant="body2" sx={{ color: '#fff' }}>
          No exercises found for this workout type.
        </Typography>
      )}
    </Box>
  );
};

export default ExerciseList;

