import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import WorkoutImage from '../WorkImage/WorkImage';
import WorkoutDetails from '../WorkoutDetails/WorkoutDetails';
import KeepWatchingButton from '../KeepWatchingButton/KeepWatchingButton';
import UserInfo from './UserInfo';
import Achievements from './Achievements';

const UserInfoSection = ({user}) => {
  return (
    <Box sx={{ backgroundColor: '#000', color: '#fff', pb: 3 }}>
      <Achievements />
      <WorkoutImage />
      <WorkoutDetails />
      <KeepWatchingButton />
    </Box>
  );
};

export default UserInfoSection;

