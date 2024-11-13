import { configureStore } from '@reduxjs/toolkit';
import exercisesReducer from './features/exercisesSlice';

export const store = configureStore({
    reducer: {
        exercises: exercisesReducer,
    },
});

// store - central hub of our application state
// reducer - similar to our "set" hooks. They define how our state changes
// Slices - breaks our state into more manageable pieces