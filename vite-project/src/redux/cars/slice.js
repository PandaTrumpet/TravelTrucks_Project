import { createSlice } from "@reduxjs/toolkit";
import { fetchCars } from "./operation.js";

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    items: [],
    loading: false,
    error: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCars.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});
export default carsSlice.reducer;
