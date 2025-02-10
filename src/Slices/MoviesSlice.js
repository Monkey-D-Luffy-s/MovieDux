import { createSlice } from "@reduxjs/toolkit";
import movies from "../movies.json";

const initialState = { movies: movies };

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    UpdateMovie: (state, payload) => {
      const { id, movie } = payload.payload;
      const movieindex = state.movies.findIndex((movie) => movie.id === id);
      if (movieindex != -1) {
        state.movies[movieindex] = { ...state.movies[movieindex], ...movie };
      }
    },
    FindMovie: (state, payload) => {
      const movie = state.movies.find((movie) => movie.image == payload.image);
    },
  },
});

export const { UpdateMovie } = moviesSlice.actions;
export default moviesSlice.reducer;
