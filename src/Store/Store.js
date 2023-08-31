import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../Slice/Todoslice';

export const store = configureStore({
    reducer: {
        todo: todoReducer,
    },
});