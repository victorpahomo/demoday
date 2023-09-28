import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getContributionsData } from "../../services/dataFirebaseService";
// Estado inicial del slice de contribuciones
const initialState = {
  allContributions: [],
  error: null,
  loading: "idle",
};
// Definición del slice de contribuciones
const contributionSlice = createSlice({
  name: "contribution",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getContributionsData.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(getContributionsData.fulfilled, (state, action) => {
        state.loading = "fulfilled";
        state.allContributions = action.payload;
      })
      .addCase(getContributionsData.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = action.payload;
      })
      .addCase(clean.fulfilled, (state) => {
        Object.assign(state, initialState);
      });
  },
});

export default contributionSlice.reducer;

export const clean = createAsyncThunk(
  "contribution/clean",
  async () => {
    try {
      return null;
    } catch (error) {
      console.error("Error getting documents:", error);
      throw error;
    }
  }
);