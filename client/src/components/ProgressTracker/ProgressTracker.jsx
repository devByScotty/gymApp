import React, { useState, useEffect } from 'react';
import { Box, TextField, Button } from '@mui/material';

const ProgressTracker = ({ exercises, onProgressUpdate }) => {
    const [progress, setProgress] = useState([]);

    // Use useEffect to initialize progress state when exercises change
    useEffect(() => {
        const initialProgress = exercises.map(() => ({
            repetitions: '',
            weight: '',
            sets: '' // Ensure sets are also initialized
        }));
        setProgress(initialProgress);
    }, [exercises]);

    const handleInputChange = (index, field, value) => {
        const updatedProgress = [...progress];
        updatedProgress[index][field] = value;
        setProgress(updatedProgress);
    };

    const handleSubmit = () => {
        onProgressUpdate(progress);
    };

    return (
        <Box sx={{ padding: 2 }}>
            {exercises.length === 0 ? (
                <p>No exercises available to track progress.</p>
            ) : (
                exercises.map((exercise, index) => (
                    <Box key={exercise._id} sx={{ mb: 3, padding: 2, backgroundColor: '#444', borderRadius: 2 }}>
                        <h3 style={{ color: '#fff' }}>{exercise.name}</h3>
                        <TextField
                            label="Repetitions"
                            type="number"
                            value={progress[index]?.repetitions || ''}
                            onChange={(e) => handleInputChange(index, 'repetitions', e.target.value)}
                            InputLabelProps={{
                                style: { color: '#C7FF00' }, // Light green for the label
                            }}
                            inputProps={{
                                style: { color: '#fff', backgroundColor: '#333' }, // Light text, dark background
                            }}
                            sx={{
                                mb: 2, // Margin bottom for spacing
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: '#C7FF00', // Light green border
                                    },
                                    '&:hover fieldset': {
                                        borderColor: '#C7FF00', // Light green on hover
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#C7FF00', // Light green when focused
                                    },
                                },
                            }}
                        />
                        <TextField
                            label="Weight (kg)"
                            type="number"
                            value={progress[index]?.weight || ''}
                            onChange={(e) => handleInputChange(index, 'weight', e.target.value)}
                            InputLabelProps={{
                                style: { color: '#C7FF00' }, // Light green for the label
                            }}
                            inputProps={{
                                style: { color: '#fff', backgroundColor: '#333' }, // Light text, dark background
                            }}
                            sx={{
                                mb: 2, // Margin bottom for spacing
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: '#C7FF00', // Light green border
                                    },
                                    '&:hover fieldset': {
                                        borderColor: '#C7FF00', // Light green on hover
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#C7FF00', // Light green when focused
                                    },
                                },
                            }}
                        />
                        <TextField
                            label="Sets"
                            type="number"
                            value={progress[index]?.sets || ''}
                            onChange={(e) => handleInputChange(index, 'sets', e.target.value)}
                            InputLabelProps={{
                                style: { color: '#C7FF00' }, // Light green for the label
                            }}
                            inputProps={{
                                style: { color: '#fff', backgroundColor: '#333' }, // Light text, dark background
                            }}
                            sx={{
                                mb: 2, // Margin bottom for spacing
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: '#C7FF00', // Light green border
                                    },
                                    '&:hover fieldset': {
                                        borderColor: '#C7FF00', // Light green on hover
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#C7FF00', // Light green when focused
                                    },
                                },
                            }}
                        />
                    </Box>
                ))
            )}
            <Button variant="contained" onClick={handleSubmit} sx={{ mt: 3 }}>
                Save Progress
            </Button>
        </Box>
    );
};

export default ProgressTracker;
