import { configureStore } from "@reduxjs/toolkit";
import carsReducer from "./cars/slice.js";
import filterReducer from "./filter/slice.js";
export const store = configureStore({
  reducer: {
    cars: carsReducer,
    filter: filterReducer,
  },
});
