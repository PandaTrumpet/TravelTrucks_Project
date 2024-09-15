export const filterSelector = (state) => state.filter.items;

import { createSelector } from "reselect";

// Предположим, у вас есть два среза состояния
const filterArraySelector = (state) => state.filters.items;
const dataArraySelector = (state) => state.cars.items;

// Селектор для фильтрации данных
export const filteredDataSelector = createSelector(
  [filterArraySelector, dataArraySelector],
  (filterArray, dataArray) => {
    return dataArray.filter((item) => filterArray.includes(item.feature));
  }
);
