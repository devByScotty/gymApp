import React, { useState } from 'react';
import { Box, Button, Typography, TextField } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUpForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors
    setSuccess(''); // Clear previous success messages

    try {
      const response = await axios.post('https://gymapp-wxel.onrender.com/api/users/signup', formData);

      if (response.status === 201) {
        setSuccess('Registration successful!'); // Show success message
        setFormData({ name: '', email: '', password: '' }); // Reset form
        setTimeout(() => {
          navigate('/exerciseBoard'); // Redirect after 2 seconds
        }, 2000);
      } else {
        setError(response.data.message || 'Registration failed');
      }
    } catch (err) {
      console.error('Error registering:', err);
      setError('An unexpected error occurred. Please try again.');
    }
  };

  return (
    <Box
      sx={{
        width: 400,
        bgcolor: 'background.paper',
        p: 4,
        borderRadius: 2,
      }}
    >
      <Typography variant="h6" component="h2">
        Sign Up
      </Typography>
      {error && <Typography color="error">{error}</Typography>}
      {success && <Typography color="success.main">{success}</Typography>}
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Name"
          name="name"
          type="text"
          variant="outlined"
          margin="normal"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          variant="outlined"
          margin="normal"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          label="Password"
          name="password"
          type="password"
          variant="outlined"
          margin="normal"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <Button
          type="submit"
          variant="contained"
          sx={{ mt: 2, backgroundColor: '#C7FF00' }}
        >
          Sign Up
        </Button>
      </form>
    </Box>
  );
};

export default SignUpForm;




