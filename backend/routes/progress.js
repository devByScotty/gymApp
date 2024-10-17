// routes/progress.js

const express = require('express');
const router = express.Router();
const Progress = require('../models/Progress');
//const Workout = require('../models/Workout');

// Save Progress
router.post('/save', async (req, res) => {
  const { userId, workoutId, exercises } = req.body;

  const newProgress = new Progress({
    userId,
    workoutId,
    exercises,
  });

  try {
    await newProgress.save();
    res.status(201).json({ message: 'Progress saved successfully!', progress: newProgress });
  } catch (error) {
    console.error('Error saving progress:', error);
    res.status(500).json({ message: 'Error saving progress', error });
  }
});

// Get Progress by User ID
router.get('/:userId', async (req, res) => {
  try {
    const progressRecords = await Progress.find({ userId: req.params.userId }).populate('workoutId');
    res.status(200).json(progressRecords);
  } catch (error) {
    console.error('Error fetching progress:', error);
    res.status(500).json({ message: 'Error fetching progress', error });
  }
});

// Get Progress by Workout ID
router.get('/workout/:workoutId', async (req, res) => {
  try {
    const progressRecords = await Progress.find({ workoutId: req.params.workoutId });
    res.status(200).json(progressRecords);
  } catch (error) {
    console.error('Error fetching progress:', error);
    res.status(500).json({ message: 'Error fetching progress', error });
  }
});

module.exports = router;
