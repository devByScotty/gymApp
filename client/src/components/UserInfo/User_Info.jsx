import React from 'react'
import { Box, Typography } from '@mui/material';

const User_Info = () => {

  const name = localStorage.getItem('name')
  console.log(name);

  return (
    <div>
        <Box sx={{ p: 3, backgroundColor: '#1e1e1e', color: '#fff' }}>
      {/* User's info section */}
      <Typography variant="h4" gutterBottom>
        Welcome, 
      </Typography>
      <Typography variant="subtitle1">
        You've been on a great -week workout streak! Keep it up!
      </Typography>
      </Box>
      
    </div>
  )
}

export default User_Info
