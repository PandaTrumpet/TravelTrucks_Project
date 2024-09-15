import { createSlice } from "@reduxjs/toolkit";
const filterSlice = createSlice({
  name: "filters",
  initialState: {
    filter: [],
  },
  reducers: {
    filterCars: {
      reducer(state, action) {
        state.filter = action.payload;
      },
    },
  },
});

export const { filterCar } = filterSlice.actions;
export default filterSlice.reducer;
