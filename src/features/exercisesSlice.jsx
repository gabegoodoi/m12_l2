import { createSlice } from '@reduxjs/toolkit';
import exercises from '../data/exercises';

const initialState = {
    workouts: exercises, // start with data from exercises.js
};

export const exercisesSlice = createSlice({
    name: 'exercises',
    initialState,
    reducers: {
        addExercise: (state, action) => {
            state.workouts.push(action.payload);
        },
        removeExercise: (state, action) => {
            state.workouts = state.workouts.filter(exercise => exercise.id !== action.payload.id); // Remove exercise by id
        },
    },
});

export const { addExercise, removeExercise } = exercisesSlice.actions;

export default exercisesSlice.reducer;