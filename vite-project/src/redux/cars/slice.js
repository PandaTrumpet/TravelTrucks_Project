import { createSlice, createSelector } from "@reduxjs/toolkit";
import { fetchCarId, fetchCars } from "./operation.js";

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    items: [],
    // favouriteCars: [],
    favouriteCars: JSON.parse(localStorage.getItem("favouriteCars")) || [],
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
  reducers: {
    addToFavouriteCar(state, action) {
      const isFavourite = state.favouriteCars.some(
        (car) => car.id === action.payload.id
      );
      if (!isFavourite) {
        state.favouriteCars.push(action.payload);
        localStorage.setItem(
          "favouriteCars",
          JSON.stringify(state.favouriteCars)
        );
      }
    },
    // deleteFavouriteCar(state, action) {
    //   state.favouriteCars = state.favouriteCars.filter(
    //     (car) => car.id !== action.payload.id
    //   );
    // },
    deleteFavouriteCar: (state, action) => {
      state.favouriteCars = state.favouriteCars.filter(
        (car) => car.id !== action.payload.id
      );
      localStorage.setItem(
        "favouriteCars",
        JSON.stringify(state.favouriteCars)
      );
    },
  },
});

export const filteredCars = createSelector(
  [(state) => state.cars.items, (state) => state.filter.filterItem],
  (cars, filter) => {
    // Проверяем, если все фильтры либо пусты, либо false, либо null
    const noFiltersApplied = Object.keys(filter).every(
      (key) => filter[key] === false || filter[key] === null
    );

    // Если нет активных фильтров, возвращаем все автомобили
    if (noFiltersApplied) {
      return cars;
    }

    // Если есть фильтры, применяем фильтрацию
    return cars.filter((car) => {
      return Object.keys(filter).every((key) => {
        if (filter[key] === false || filter[key] === null) {
          return true; // Пропускаем этот критерий фильтрации
        }
        return car[key] === filter[key]; // Сравниваем с фильтром
      });
    });
  }
);
export const fullfiltered = createSelector(
  [filteredCars, (state) => state.filter.location],
  (cars, location) => {
    return cars.filter((car) =>
      car.location.toLowerCase().includes(location.toLowerCase())
    );
  }
);

export const { addToFavouriteCar, deleteFavouriteCar } = carsSlice.actions;
export default carsSlice.reducer;
