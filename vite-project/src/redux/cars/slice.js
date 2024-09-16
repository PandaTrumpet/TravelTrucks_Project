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
// export const filteredCars = createSelector(
//   [(state) => state.cars.items, (state) => state.filter.filterItem],
//   (cars, filter) => {
//     return cars.filter((car) => {
//       if (filter.TV === undefined || filter.TV === null) {
//         return true; // Возвращаем все автомобили
//       }

//       return car.TV === filter.TV;
//     });
//   }
// );
// export const filteredCars = createSelector(
//   [(state) => state.cars.items, (state) => state.filter.filterItem],
//   (cars, filter) => {
//     return cars.filter((car) => {
//       return Object.keys(filter).every((key) => {
//         return car[key] === filter[key];
//       });
//     });
//   }
// );

// export const filteredCars = createSelector(
//   [(state) => state.cars.items, (state) => state.filter.filterItem],
//   (cars, filter) => {
//     return cars.filter((car) => {
//       // console.log(car);

//       return Object.keys(filter).every((key) => {
//         // console.log(filter);

//         // Применяем фильтр только если он задан (не undefined и не null)
//         if (filter[key] === false || filter[key] === null) {
//           // console.log(filter);

//           return true; // Пропускаем этот критерий фильтрации
//         }
//         return car[key] === filter[key]; // Сравниваем с фильтром
//       });
//     });
//   }
// );
// export const filteredCars = createSelector(
//   [(state) => state.cars.items, (state) => state.filter.filterItem],
//   (cars, filter) => {
//     // Проверяем, если все фильтры либо пусты, либо false, либо null
//     const noFiltersApplied = Object.keys(filter).every(
//       (key) => filter[key] === false || filter[key] === null
//     );

//     // Если нет активных фильтров, возвращаем все автомобили
//     if (noFiltersApplied) {
//       return cars;
//     }

//     // Если есть фильтры, применяем фильтрацию
//     return cars.filter((car) => {
//       return Object.keys(filter).every((key) => {
//         if (filter[key] === false || filter[key] === null) {
//           return true; // Пропускаем этот критерий фильтрации
//         }
//         return car[key] === filter[key]; // Сравниваем с фильтром
//       });
//     });
//   }
// );

export const filteredCars = createSelector(
  [
    (state) => state.cars.items,
    (state) => state.filter.filterItem,
    (state) => state.filter.location, // Получаем город из состояния фильтра
  ],
  (cars, filter, location) => {
    // Проверяем, если все фильтры либо пусты, либо false, либо null
    const noFiltersApplied = Object.keys(filter).every(
      (key) => filter[key] === false || filter[key] === null
    );

    // Если нет активных фильтров и не выбран город, возвращаем все автомобили
    if (noFiltersApplied && !location) {
      return cars;
    }

    // Применяем фильтрацию по выбранным параметрам
    return cars.filter((car) => {
      // Фильтрация по городам (если указан город)
      if (
        city &&
        !car.location.toLowerCase().includes(location.toLowerCase())
      ) {
        return false; // Пропускаем автомобиль, если город не совпадает
      }

      // Применяем остальные фильтры
      return Object.keys(filter).every((key) => {
        if (filter[key] === false || filter[key] === null) {
          return true; // Пропускаем этот критерий фильтрации
        }
        return car[key] === filter[key]; // Сравниваем с фильтром
      });
    });
  }
);

export default carsSlice.reducer;
