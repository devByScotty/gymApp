// models/Workout.js
const mongoose = require('mongoose');

const WorkoutSchema = new mongoose.Schema({
  userId: { type: String, required: true  },
  name: { type: String, required: true },
  date: { type: Date, required: true },
  duration: { type: Number, required: true }, // Duration in minutes
  exercises: [{ type: String }], // List of exercise names
}, { timestamps: true });

module.exports = mongoose.model('Workout', WorkoutSchema);
