import axios from 'axios';

// Create a base instance with optional authorization header (if using tokens)
// If your backend is running on port 5002
const API = axios.create({
  baseURL: 'http://localhost:5002/api', // Ensure this matches your backend's URL
});

// Intercept requests to attach authorization tokens if available
API.interceptors.request.use(
  (config) => {
    // Assuming you're storing the JWT in localStorage
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Handle errors in a centralized way
const handleResponse = (response) => response.data;
const handleError = (error) => {
  console.error('API call failed:', error);
  return Promise.reject(error.response ? error.response.data : error.message);
};

// User Signup
export const signUp = (data) => 
  API.post('/users/signup', data).then(handleResponse).catch(handleError);

// User Login
export const login = (data) => 
  API.post('/users/login', data).then(handleResponse).catch(handleError);

// Fetch user profile by ID
export const getUserProfile = (userId) => 
  API.get(`/users/${userId}`).then(handleResponse).catch(handleError);

// Add a new workout
export const addWorkout = (data) => 
  API.post('/workouts', data).then(handleResponse).catch(handleError);

// Fetch user's workouts
export const getWorkouts = (userId) => 
  API.get(`/workouts/${userId}`).then(handleResponse).catch(handleError);

// Create a workout plan
export const createWorkoutPlan = (data) => 
  API.post('/plans', data).then(handleResponse).catch(handleError);

// Fetch user's workout plans
export const getWorkoutPlans = (userId) => 
  API.get(`/plans/${userId}`).then(handleResponse).catch(handleError);

// Register push notification token
export const registerNotificationToken = (data) => 
  API.post('/notifications', data).then(handleResponse).catch(handleError);
