import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalOpen: false,
  photoUrl: "",
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isModalOpen = true;
      state.photoUrl = action.payload;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
      state.photoUrl = "";
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export const modalReducer = modalSlice.reducer;
