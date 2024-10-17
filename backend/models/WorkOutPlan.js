// models/WorkoutPlan.js
const mongoose = require('mongoose');

const WorkOutPlanSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  exercises: [{ type: String, required: true }], // List of exercises in the plan
}, { timestamps: true });

module.exports = mongoose.model('WorkOutPlan', WorkOutPlanSchema);
