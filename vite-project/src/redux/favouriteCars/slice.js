import { createSlice } from "@reduxjs/toolkit";

const favouriteSlice = createSlice({
  name: "favourites",
  initialState: {
    // favouriteCars: JSON.parse(localStorage.getItem("favouriteCars")) || [],
    favouriteCars: [],
  },
  reducers: {
    addToFavouriteCar: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("favouriteCars", JSON.stringify(state));
    },
    deleteFavouriteCar: (state, action) => {
      const updatedState = state.filter((car) => car.id !== action.payload.id);
      localStorage.setItem("favouriteCars", JSON.stringify(updatedState));
      return updatedState;
    },
    setFavourites: (state, action) => {
      return action.payload;
    },
  },
});
// export const favouriteCarsSelector = (state) => state.favourites.favouriteCars;
export const { addToFavouriteCar, deleteFavouriteCar, setFavourites } =
  favouriteSlice.actions;
export default favouriteSlice.reducer;
