import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isOpen: false,
  },
  reducers: {
    isOpen(state) {
      state.isOpen = true;
    },
    isClosed(state) {
      state.isOpen = false;
    },
  },
});

export const { isClosed, isOpen } = modalSlice.actions;
export const isOpenSelector = (state) => state.modal.isOpen;
export default modalSlice.reducer;
