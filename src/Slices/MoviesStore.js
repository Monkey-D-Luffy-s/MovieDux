import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./MoviesSlice";
import dataSlice from "./EmployeeSlice";
import ESlice from "./ESlice";

const store = configureStore({
  reducer: {
    movies: movieReducer,
    employees: dataSlice,
    Emp: ESlice,
  },
});

export default store;
