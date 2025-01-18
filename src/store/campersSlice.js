import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Створимо асинхронну функцію для отримання списку кемперів
export const fetchCampers = createAsyncThunk(
  "campers/fetchAll",
  async (filters) => {
    const query = new URLSearchParams(filters).toString();
    const response = await fetch(`/api/campers?${query}`);
    return response.json();
  }
);

// Створимо асинхронну функцію для отримання даних про кемпер
export const fetchCamperDetails = createAsyncThunk(
  "campers/fetchDetails",
  async (id) => {
    const response = await fetch(`/api/campers/${id}`);
    return response.json();
  }
);

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    campers: [],
    details: {},
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.campers = action.payload;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchCamperDetails.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCamperDetails.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.details = action.payload;
      })
      .addCase(fetchCamperDetails.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default campersSlice.reducer;
