// models/User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // You would typically hash this
  workouts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Workout' }],
  workoutPlans: [{ type: mongoose.Schema.Types.ObjectId, ref: 'WorkOutPlan' }],
  NotificationToken: { type: String }, // Stores user's push notification token
}, { timestamps: true });

module.exports = mongoose.model('Users', UserSchema);
