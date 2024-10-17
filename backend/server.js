const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const userRoutes = require('./routes/User');
const workoutRoutes = require('./routes/WorkOut');
const workoutPlanRoutes = require('./routes/WorkoutPlan');
const notificationRoutes = require('./routes/notificationToken');
const progressRoutes = require('./routes/progress');

dotenv.config();

const app = express();
app.use(express.json());

// Apply CORS

app.use(cors());

function connectDB() {
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Mongo DB Connection Successful"))
  .catch((err) => {
    console.error("Mongo DB Connection Failed: ", err.message);
    process.exit(1);  // Optionally, exit if connection fails
  });
}

connectDB();

// Use routes
app.use('/api/users', userRoutes);
app.use('/api/workouts', workoutRoutes);
app.use('/api/plans', workoutPlanRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/progress', progressRoutes);
// Health check route
app.get('/api/health', (req, res) => {
  res.status(200).send("Server is healthy");
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
