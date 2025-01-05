// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './moviesSlice';
import './store.css'
const store = configureStore({
  reducer: {
    movies: moviesReducer, // Add your reducers here
  },
});

export default store;
