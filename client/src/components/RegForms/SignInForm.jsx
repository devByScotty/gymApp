import React, { useState } from 'react';
import { Box, Button, Typography, TextField } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignInForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const user = ''

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://gymapp-wxel.onrender.com/api/users/login', { email, password });
      console.log('Login successful:', response.data);

      setSuccess('Login successful! Welcome, ' + response.data.user.name);
      console.log('Login successful! Welcome, ' + response.data.user.name); // Set success message

      setTimeout(() => {
        navigate('/exerciseBoard'); // Redirect to dashboard after a short delay
      }, 2000);
      setError(''); // Clear any previous errors
    } catch (error) {
      console.error('Login failed:', error);
      setError('login error'); // Set error message
    }
  };
  localStorage.setItem('userId', user.id);
  localStorage.setItem('email', user.email);
  localStorage.setItem('name', user.name);

  /* const [user, setUser] = useState(null);
 
   useEffect(() => {
     const storedUser = JSON.parse(localStorage.setItem('user'));
     if (storedUser) {
       setUser(storedUser);
     }
   }, []);
 */

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
        Sign In
      </Typography>
      {error && <Typography color="error">{error}</Typography>}
      {success && <Typography color="success.main">{success}</Typography>}
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          variant="outlined"
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextField
          fullWidth
          label="Password"
          name="password"
          type="password"
          variant="outlined"
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button
          type="submit"
          variant="contained"
          sx={{ mt: 2, backgroundColor: '#C7FF00' }}
        >
          Sign In
        </Button>
      </form>
    </Box>
  );
};

export default SignInForm;



