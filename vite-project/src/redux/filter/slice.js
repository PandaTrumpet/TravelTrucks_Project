import { createSlice } from "@reduxjs/toolkit";
const filterSlice = createSlice({
  name: "filters",
  initialState: {
    items: [],
  },
  reducers: {
    filterCars: {
      reducer(state, action) {
        state.items = action.payload;
      },
    },
  },
});

export const { filterCars } = filterSlice.actions; // Исправлено название действия
export default filterSlice.reducer;
