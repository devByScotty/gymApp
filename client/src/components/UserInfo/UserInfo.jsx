import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import DynamicWorkoutPlan from './DynamicWorkoutPlan'; // Import the workout plan component
import axios from 'axios';

const UserInfo = ({ userId }) => {

  const [workoutStats, setWorkoutStats] = useState({ totalWorkouts: 0, streak: 0 });

  useEffect(() => {
    const fetchWorkoutStats = async () => {
      try {
        const response = await axios.get(`http://localhost:5002/api/workouts/user/${user.id}/stats`);
        setWorkoutStats(response.data);
      } catch (error) {
        console.error('Error fetching workout stats:', error);
      }
    };

    fetchWorkoutStats();
  }, [user]);

  const [user, setUser] = useState({ name: '', email: '' });

  useEffect(() => {
    // Fetch user data
    const fetchUser = async () => {
      const response = await axios.get(`/api/users/${userId}`);
      setUser(response.data);
    };
    fetchUser();
  }, [userId]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    await axios.put(`/api/users/${userId}`, user);
  };

  return (
    <Box sx={{ p: 3, backgroundColor: '#1e1e1e', color: '#fff' }}>
      {/* User's info section */}
      <Typography variant="h4" gutterBottom>
        Welcome, {user.name}
      </Typography>
      <Typography variant="subtitle1">
        You've been on a {user.streak}-week workout streak! Keep it up!
      </Typography>

      {/* Display User's Workout Plan */}
      <Box mt={4}>
        <Typography variant="h6" gutterBottom>
          Your Dynamic Workout Plan
        </Typography>
        <DynamicWorkoutPlan userId={user.id} />
      </Box>

      <h2>{user.name}'s Stats</h2>
      <p>Total Workouts: {workoutStats.totalWorkouts}</p>
      <p>Current Streak: {workoutStats.streak} days</p>

    </Box>
  );
};

export default UserInfo;
