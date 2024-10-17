import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ExerciseList from './ExerciseList';

const ExerciseListContainer = () => {
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        axios.get('YOUR_RAPID_API_ENDPOINT', {
            headers: {
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
                'X-RapidAPI-Key': '9544714e70msh3ef047f13193e36p15fbd8jsnc615d9b69420',
            },
        })
            .then(response => {
                setExercises(response.data.exercises); // Adjust based on your API response structure
            })
            .catch(error => {
                console.error("Error fetching exercises", error);
            });
    }, []);

    return <ExerciseList exercises={exercises} />;
};

export default ExerciseListContainer;
