// src/redux/moviesSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api, endpoints } from '../api/axios'; // Ensure your API setup is correct

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async (type) => {
  const response = await api.get(endpoints[type]);
  return response.data.results;
});

const moviesSlice = createSlice({
  name: 'movies',
  initialState: { popular: [], topRated: [], upcoming: [], status: 'idle' },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state[action.meta.arg] = action.payload;
        state.status = 'succeeded';
      })
      .addCase(fetchMovies.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default moviesSlice.reducer;
