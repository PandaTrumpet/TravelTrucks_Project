import { createSlice, createSelector } from "@reduxjs/toolkit";
import { fetchCarId, fetchCars } from "./operation.js";

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    items: [],
    car: {},
    loading: false,
    error: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(fetchCarId.fulfilled, (state, action) => {
        state.car = action.payload;
      });
  },
});

// export const filteredCars = createSelector(
//   [(state) => state.cars.items, (state) => state.filter.filterItem],
//   (cars, filter) => {
//     console.log(cars);

//     return cars.filter((car) => (car.TV === filter.TV ? car : null));
//   }
// );
export const filteredCars = createSelector(
  [(state) => state.cars.items, (state) => state.filter.filterItem],
  (cars, filter) => {
    return cars.filter((car) => {
      if (filter.TV === undefined || filter.TV === null) {
        return true; // Возвращаем все автомобили
      }

      return car.TV === filter.TV;
    });
  }
);

// export const filteredCars = createSelector(
//   [(state) => state.cars.items, (state) => state.filter.filterItem],
//   (cars, filter) => {
//     return cars.filter((car) => {
//       // Проверяем фильтры TV и AC
//       const matchTV =
//         filter.TV === undefined || filter.TV === null
//           ? true
//           : car.TV === filter.TV;
//       const matchAC =
//         filter.AC === undefined || filter.AC === null
//           ? true
//           : car.AC === filter.AC;

//       return matchTV && matchAC;
//     });
//   }
// );

export default carsSlice.reducer;
