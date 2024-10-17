import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, CircularProgress, Button } from '@mui/material';
import axios from 'axios';
import User_Info from '../UserInfo/User_Info';
import WorkoutRecommendation from '../WorkOutRecommendation/WorkoutRecommendation';
import ExerciseList from '../ExerciseList/ExerciseList';
import BottomNavigationBar from '../BottomNavigation/BottomNavigation';
import SavedWorkouts from '../SavedWorkouts/SavedWorkouts';
import ProgressTracker from '../ProgressTracker/ProgressTracker';


const Dashboard = () => {
  const [exercises, setExercises] = useState([]);
  const [savedWorkouts, setSavedWorkouts] = useState([]);
  const [selectedWorkout, setSelectedWorkout] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [workoutId, setWorkoutId] = useState('');

  const validBodyParts = ['chest', 'back', 'shoulders', 'arms', 'legs', 'core', 'neck', 'lower arms', 'lower legs', 'upper arms', 'upper legs', 'waist'];

  const fetchExercisesByWorkout = async (bodyPart) => {
    if (!validBodyParts.includes(bodyPart)) {
      setError(`The body part '${bodyPart}' is not valid.`);
      return;
    }

    try {
      setLoading(true);
      setError('');
      const response = await axios.get(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, {
        headers: {
          'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
          'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
        },
      });

      setExercises(response.data.slice(0, 5)); // Limit to 5 exercises
    } catch (error) {
      setError('Failed to fetch exercises. Please try again later.');
      console.error('Error fetching exercises:', error.response?.data?.message || error.message);
    } finally {
      setLoading(false);
    }
  };

  const userId = localStorage.getItem('userId');
  const username = localStorage.getItem('name');

  const saveWorkoutSession = async () => {
    const workoutSession = {
      userId: userId,
      name: 'Chest Day',
      date: new Date(),
      duration: 60,
      exercises: exercises.map(exercise => exercise.name),
    };

    try {
      await axios.post('http://localhost:5002/api/workouts/saveWorkout', workoutSession);
      alert('Workout session saved successfully!');
    } catch (error) {
      console.error('Error saving workout session:', error);
      alert('Failed to save workout session.');
    }
  };

  const saveWorkoutPlan = async () => {
    const workoutPlan = {
      userId: userId,
      name: 'Weekly Plan',
      exercises: exercises.map(ex => ex.name),
    };

    try {
      const response = await axios.post('http://localhost:5002/api/plans/saveWorkoutPlan', workoutPlan);
      alert('Workout plan saved successfully!');
      setWorkoutId(response.data.workoutId);
      localStorage.setItem('workoutId', response.data.workoutId); // Store the workout ID in localStorage
    } catch (error) {
      console.error('Error saving workout plan:', error.response?.data?.message || error.message);
      alert('Failed to save workout plan.');
    }
  };

  const fetchSavedWorkouts = async () => {
    try {
      const response = await axios.get(`http://localhost:5002/api/plans/${userId}`);
      setSavedWorkouts(response.data);
    } catch (error) {
      console.error('Error fetching saved workouts:', error);
    }
  };

  useEffect(() => {
    fetchSavedWorkouts();
  }, []);

  useEffect(() => {
    if (selectedWorkout) {
      fetchExercisesByWorkout(selectedWorkout);
    }
  }, [selectedWorkout]);

  const handleProgressUpdate = async (progress) => {
    const progressData = {
      userId: userId,
      workoutId: workoutId, 
      date: new Date(),
      exercises: progress.map(exercise => ({
        name: exercise.name || 'Unknown',
        repetitions: exercise.repetitions || 0,
        weight: exercise.weight || 0,
        sets: exercise.sets || 0
      }))
    };

    try {
      await axios.post('http://localhost:5002/api/progress/save', progressData);
      alert('Progress saved successfully!');
    } catch (error) {
      console.error('Error saving progress:', error.response?.data || error.message);
      alert('Failed to save progress. Please try again.');
    }
  };

  return (
    <Box sx={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh' }}>
      <Container>
        <User_Info />
        <WorkoutRecommendation setSelectedWorkout={setSelectedWorkout} />

        <Typography variant="h6" sx={{ my: 2 }}>
          Your Workout Plan
        </Typography>

        {loading ? (
          <CircularProgress sx={{ color: '#C7FF00' }} />
        ) : error ? (
          <Typography color="error">{error}</Typography>
        ) : (
          <ExerciseList exercises={exercises} />
        )}

        <ProgressTracker exercises={exercises} onProgressUpdate={handleProgressUpdate} />

        <Button variant="contained" onClick={saveWorkoutPlan} sx={{ mt: 2, backgroundColor: '#C7FF00' }}>
          Save Workout Plan
        </Button>

        <Typography variant="h6" sx={{ my: 2 }}>
          Saved Workouts
        </Typography>
        <SavedWorkouts workouts={savedWorkouts} />

        <Button variant="contained" onClick={saveWorkoutSession} sx={{ mt: 2, backgroundColor: '#C7FF00' }}>
          Save Workout Session
        </Button>
      </Container>

      <BottomNavigationBar />
    </Box>
  );
};

export default Dashboard;


