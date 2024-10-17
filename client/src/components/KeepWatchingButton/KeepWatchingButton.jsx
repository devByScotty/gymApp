import React from 'react';
import { Box, Button } from '@mui/material';

const KeepWatchingButton = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
      <Button
        variant="contained"
        sx={{
          backgroundColor: '#C7FF00',
          color: '#000',
          '&:hover': { backgroundColor: '#A0D900' },
          px: 4,
          py: 1.5,
        }}
      >
        keep watching
      </Button>
    </Box>
  );
};

export default KeepWatchingButton;
