// routes/workoutPlan.js
const express = require('express');
const WorkoutPlan = require('../models/WorkOutPlan');
const User = require('../models/UserModel');
const router = express.Router();

// Get workout plans for a specific user
router.get('/:userId', async (req, res) => {
  try {
    const plans = await WorkoutPlan.find({ userId: req.params.userId });
    res.json(plans);
  } catch (error) {
    res.status(404).json({ error: 'Workout plans not found' });
  }
});

router.post('/saveWorkoutPlan', async (req, res) => {


  try {
    const { userId, name, exercises } = req.body;

    // Simple validation
    if (!userId || !name || !exercises) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Assuming mongoose is used for DB interaction
    const newPlan = new WorkoutPlan({
      userId,
      name,
      exercises,
    });

    await newPlan.save(); // Save the workout plan to the database

    res.status(201).json({ message: 'Workout plan saved successfully' , workoutId: newPlan._id , exercises : exercises });
  } catch (error) {
    console.error('Error saving workout plan:', error);
    res.status(500).json({ error: 'Failed to create workout plan' });
  }
});


// Add a new workout plan
router.post('/', async (req, res) => {
  const { userId, name, exercises } = req.body;
    console.log("Incoming body request" ,userId, name, exercises  );
    try {
      const { userId, name, exercises } = req.body;
  
      // Simple validation
      if (!userId || !name || !exercises) {
        return res.status(400).json({ error: 'Missing required fields' });
      }
  
      // Assuming mongoose is used for DB interaction
      const newPlan = new WorkoutPlan({
        userId,
        name,
        exercises,
      });
  
      await newPlan.save(); // Save the workout plan to the database
  
      res.status(201).json({ message: 'Workout plan saved successfully', workoutId: newPlan._id, exercises: exercises });

    } catch (error) {
      console.error('Error saving workout plan:', error);
      res.status(500).json({ error: 'Failed to create workout plan' });
    }
});

module.exports = router;
