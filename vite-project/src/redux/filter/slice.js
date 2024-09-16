import { createSlice } from "@reduxjs/toolkit";
import { filteredCars } from "../cars/slice.js";
console.log(filteredCars);

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    filterItem: {},
  },
  reducers: {
    filterCars(state, action) {
      state.filterItem = action.payload;
    },
    filterCity(state, action) {
      state.city = action.payload;
      // const cars = state.cars.items;
      // cars.filter((car) => car.location.includes(action.payload));
    },
  },
});

export const { filterCars, filterCity } = filterSlice.actions; // Исправлено название действия
export default filterSlice.reducer;
