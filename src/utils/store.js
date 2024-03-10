import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./moviesSlice";
import searchResultReducer from "./searchSlice";

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    search: searchResultReducer,
  },
});

export default store;
