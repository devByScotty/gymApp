// routes/workout.js
const express = require('express');
const Workout = require('../models/Workout');
const User = require('../models/UserModel');
const router = express.Router();

// Get workouts for a specific user
router.get('/user/:userId', async (req, res) => {
  try {
    const workouts = await Workout.find({ userId: req.params.userId });
    res.status(200).send(workouts);
  } catch (error) {
    res.status(500).send({ error: 'Failed to fetch workouts' });
  }
})

// Backend route to fetch saved workouts for a user
router.get('/workouts/user/:userId', async (req, res) => {
  try {
    const workouts = await Workout.find({ userId: req.params.userId });
    res.status(200).send(workouts);
  } catch (error) {
    res.status(500).send({ error: 'Failed to fetch workouts' });
  }
});

// Add a new workout

router.post('/saveWorkout', async (req, res) => {
  try {
    const { userId, name, date, duration, exercises } = req.body;
    const workout = new Workout({ userId, name, date, duration, exercises });
    await workout.save();

    // Update user's workouts list
    await User.findByIdAndUpdate(userId, { $push: { workouts: workout._id } });

    res.status(201).json(workout);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create workout' });
  }
});


router.post('/', async (req, res) => {

  const { userId, name, date, duration, exercises } = req.body;
  console.log('Incoming request body:', req.body);

  try {
    const { userId, name, date, duration, exercises } = req.body;
    const workout = new Workout({ userId, name, date, duration, exercises });
    await workout.save();

    // Update user's workouts list
    await User.findByIdAndUpdate(userId, { $push: { workouts: workout._id } });

    res.status(201).json(workout);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create workout' });
  }
});

router.get('/user/:userId/stats', async (req, res) => {
  try {
    const workouts = await Workout.find({ userId: req.params.userId });
    const totalWorkouts = workouts.length;

    // Example streak logic: Assume a streak is counted if workouts are done on consecutive days
    const streak = calculateStreak(workouts); // You can define the logic for calculating streak

    res.status(200).send({ totalWorkouts, streak });
  } catch (error) {
    res.status(500).send({ error: 'Failed to fetch workout stats' });
  }
});

module.exports = router;
