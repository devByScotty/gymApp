import React, { useEffect, useState } from 'react';
import { Box, Typography, Avatar, CircularProgress } from '@mui/material';
import axios from 'axios';

const UserProfile = ({ userId }) => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [progressData, setProgressData] = useState([]);
    const [error, setError] = useState(false);  // State to handle "Oops" message

    // Assuming workoutId is stored in localStorage
    const workId = localStorage.getItem('workoutId');

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get(`http://localhost:5002/api/users/${userId}`);
                setUserData(response.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
                setError(true);  // Set error flag if user data fails
            } finally {
                setLoading(false);
            }
        };

        if (userId) {
            fetchUserData();
        }
    }, [userId]);

    useEffect(() => {
        const fetchProgressData = async () => {
            try {
                const response = await axios.get(`http://localhost:5002/api/plans/${userId}`);
                setProgressData(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching progress data:', error);
                setError(true);  // Set error flag if progress data fails
            }
        };

        if (userId) {
            fetchProgressData();
        }
    }, [userId]);

    if (loading) {
        return <CircularProgress />;
    }

    if (error) {
        // Display the "Oops" message if there's an error
        return (
            <Box sx={{ p: 3, bgcolor: '#1e1e1e', borderRadius: '8px', textAlign: 'center' }}>
                <Typography variant="h4" sx={{ color: '#C7FF00', mb: 2 }}>Oops!</Typography>
                <Typography variant="h6" sx={{ color: '#fff' }}>
                    Something went wrong. This feature is under construction. Please try again later.
                </Typography>
            </Box>
        );
    }

    return (
        <Box sx={{ p: 3, bgcolor: '#1e1e1e', borderRadius: '8px' }}>
            <Typography variant="h4" sx={{ color: '#C7FF00', mb: 2 }}>User Profile</Typography>
            
            {/* User Info */}
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                <Avatar
                    src={userData?.profilePicture || '/path/to/default/avatar.png'}
                    alt="User Avatar"
                    sx={{ width: 100, height: 100, mr: 2 }}
                />
                <Typography variant="h6" sx={{ color: '#fff' }}>{userData?.name}</Typography>
            </Box>
            <Typography variant="body1" sx={{ color: '#fff', mb: 2 }}>Email: {userData?.email}</Typography>

            {/* Progress */}
            <Typography variant="h5" sx={{ color: '#C7FF00', mt: 4 }}>Progress</Typography>
            <Typography variant="body1" sx={{ color: '#fff' }}>
                This feature is still under construction.
            </Typography>
        </Box>
    );
};

export default UserProfile;
