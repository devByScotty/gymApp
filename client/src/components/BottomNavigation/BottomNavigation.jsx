import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';


const BottomNavigationBar = () => {
    const [value, setValue] = React.useState(0);

    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            sx={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: '#222',
                zIndex: 1000,
            }}
        >
            <BottomNavigationAction
                component={Link}
                to="/"
                label="Home"
                icon={<HomeIcon />}
            />
            {
                /**<BottomNavigationAction
                component={Link}
                to="/search"
                label="Search"
                icon={<SearchIcon />}
            /> */
            }

            <BottomNavigationAction
                component={Link}
                to="/exerciseBoard"
                label="Exercises"
                icon={<FitnessCenterIcon />}
            />

            {
                /**
            <BottomNavigationAction
                component={Link}
                to="/profile"
                label="Profile"
                icon={<AccountCircleIcon />}
            /> */
            }
        </BottomNavigation>
    );
};

export default BottomNavigationBar;
