// models/Progress.js

const mongoose = require('mongoose');

const ProgressSchema = new mongoose.Schema({
  userId: { type: String, required: true  },
  workoutId: { type: String, required: true  }, // Reference to the workout session
  date: { type: Date, default: Date.now }, // Date of the recorded progress
  exercises: [
    {
      name: { type: String, required: true }, // Name of the exercise
      sets: { type: Number, required: true }, // Number of sets
      repetitions: { type: Number, required: true }, // Number of repetitions
      weight: { type: Number, required: true }, // Weight lifted
      duration: { type: Number, required: false }, // Duration for time-based exercises (if applicable)
    },
  ],
}, { timestamps: true });

module.exports = mongoose.model('Progress', ProgressSchema);
