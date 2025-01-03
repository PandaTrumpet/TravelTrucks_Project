import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    filterItem: {},
    location: "",
  },
  reducers: {
    filterCars(state, action) {
      state.filterItem = action.payload;
    },
    filterCity(state, action) {
      state.location = action.payload;
    },
  },
});

export const { filterCars, filterCity } = filterSlice.actions;
export default filterSlice.reducer;
