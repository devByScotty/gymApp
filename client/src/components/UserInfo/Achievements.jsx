import React from 'react';
import { Box, Typography, Badge, Avatar } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const Achievements = () => {
  return (
    <Box sx={{ textAlign: 'center', my: 3 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Achievements
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3 }}>
        {/* Badge 1 */}
        <Badge
          badgeContent="Gold"
          color="primary"
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
        >
          <Avatar sx={{ backgroundColor: '#FFD700', width: 60, height: 60 }}>
            <StarIcon fontSize="large" sx={{ color: '#fff' }} />
          </Avatar>
        </Badge>

        {/* Badge 2 */}
        <Badge
          badgeContent="Strength"
          color="secondary"
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
        >
          <Avatar sx={{ backgroundColor: '#FF5722', width: 60, height: 60 }}>
            <FitnessCenterIcon fontSize="large" sx={{ color: '#fff' }} />
          </Avatar>
        </Badge>

        {/* Badge 3 */}
        <Badge
          badgeContent="Champion"
          color="error"
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
        >
          <Avatar sx={{ backgroundColor: '#3f51b5', width: 60, height: 60 }}>
            <EmojiEventsIcon fontSize="large" sx={{ color: '#fff' }} />
          </Avatar>
        </Badge>
      </Box>
    </Box>
  );
};

export default Achievements;
