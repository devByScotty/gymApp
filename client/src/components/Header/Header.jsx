import React, { useState, useEffect } from 'react';
import { Box, Button, Typography, Modal } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../../assets/img/home-background.jpg';
import SignInForm from '../RegForms/SignInForm';
import SignUpForm from '../RegForms/SignUpForm';
import './Header.css';




const Header = () => {
  const navigate = useNavigate();

  const [openSignIn, setOpenSignIn] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);

  const handleOpenSignIn = () => setOpenSignIn(true);
  const handleCloseSignIn = () => setOpenSignIn(false);

  const handleOpenSignUp = () => setOpenSignUp(true);
  const handleCloseSignUp = () => setOpenSignUp(false);

  const [timeLeft, setTimeLeft] = useState(3600); // Example: 1 hour

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${minutes}:${sec < 10 ? '0' : ''}${sec}`;
  };

  return (
    <Box
      sx={{
        height: '100vh',
        backgroundImage: `url(https://images.unsplash.com/photo-1550259979-ed79b48d2a30?q=80&w=1668&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed', // Add this for parallax effect
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: '#fff',
      }}
    >
      <Box>
        <Typography variant="subtitle2" sx={{ mt: 2 }}>
          Hurry up! Special offer ends in: {formatTime(timeLeft)}
        </Typography>

        <Typography variant="h4" component="h1" gutterBottom>
          NO MORE EXCUSES
        </Typography>

        <Typography variant="subtitle1" component="p" gutterBottom>
          Achieve your fitness goals with our expert trainers! Join us for personalized workouts that get results.
        </Typography>

        <Box mt={4}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#333',
              color: '#fff',
              '&:hover': {
                backgroundColor: '#555',
              },
            }}
            onClick={handleOpenSignIn}
          >
            SIGN IN
          </Button>
          <Button
            variant="contained"
            sx={{
              ml: 2,
              backgroundColor: '#C7FF00',
              '&:hover': {
                backgroundColor: '#A0D900',
              },
            }}
            onClick={handleOpenSignUp}
          >
            SIGN UP
          </Button>
        </Box>

        {/* Sign In Modal */}
        <Modal open={openSignIn} onClose={handleCloseSignIn}>
          <Box>
            <SignInForm />
          </Box>
        </Modal>

        {/* Sign Up Modal */}
        <Modal open={openSignUp} onClose={handleCloseSignUp}>
          <Box> {/* Sign Up Form Component Goes Here */}
            <SignUpForm />
          </Box>
        </Modal>
      </Box>
    </Box>
  );
};

export default Header;
