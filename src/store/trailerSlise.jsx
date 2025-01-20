import { createSlice } from "@reduxjs/toolkit";
import { fetchTrailersDetails, fetchTrailers } from "./operations";
import { initialState } from "./initialState";

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const trailerSlice = createSlice({
  name: "trailers",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrailers.pending, handlePending)
      .addCase(fetchTrailers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.trailers = action.payload.items;
      })
      .addCase(fetchTrailers.rejected, handleRejected)
      .addCase(fetchTrailersDetails.pending, handlePending)
      .addCase(fetchTrailersDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.trailer = action.payload;
      })
      .addCase(fetchTrailersDetails.rejected, handleRejected);
  },
});

export const trailerReducer = trailerSlice.reducer;
