import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    latestMovies: null,
    popularMovies: null,
  },
  reducers: {
    addLatestMovies(state, action) {
      state.latestMovies = action.payload;
    },
    addPopularMovies(state, action) {
      state.popularMovies = action.payload;
    },
  },
});

export const { addLatestMovies, addPopularMovies } = moviesSlice.actions;

export default moviesSlice.reducer;
