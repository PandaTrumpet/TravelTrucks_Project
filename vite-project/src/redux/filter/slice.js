import { createSlice } from "@reduxjs/toolkit";
// const filterSlice = createSlice({
//   name: "filters",
//   initialState: {
//     items: [],
//   },
//   reducers: {
//     filterCars: {
//       reducer(state, action) {
//         state.items = action.payload;
//       },
//     },
//   },
// });

// Экшен для фильтрации автомобилей
const filterSlice = createSlice({
  name: "filter",
  initialState: {
    filterItem: {},
  },
  reducers: {
    // filterCars(state, action) {
    //   const filters = action.payload;
    //   return state.filter((car) => {
    //     // Фильтруем по нескольким параметрам
    //     const matchAC = filters.AC ? car.AC === filters.AC : true;
    //     const matchAutomatic = filters.automatic
    //       ? car.automatic === filters.automatic
    //       : true;
    //     const matchKitchen = filters.kitchen
    //       ? car.kitchen === filters.kitchen
    //       : true;
    //     const matchTV = filters.TV ? car.TV === filters.TV : true;
    //     const matchBathroom = filters.bathroom
    //       ? car.bathroom === filters.bathroom
    //       : true;
    //     const matchVehicleType =
    //       filters.vehicleType.length > 0
    //         ? filters.vehicleType.includes(car.vehicleType)
    //         : true;

    //     // Вернём true только если все условия выполнены
    //     return (
    //       matchAC &&
    //       matchAutomatic &&
    //       matchKitchen &&
    //       matchTV &&
    //       matchBathroom &&
    //       matchVehicleType
    //     );
    //   });
    // },
    filterCars(state, action) {
      const folter = action.payload;

      state.filterItem = action.payload;
    },
  },
});

export const { filterCars } = filterSlice.actions; // Исправлено название действия
export default filterSlice.reducer;
