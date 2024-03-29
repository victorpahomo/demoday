import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllNewsData } from "../../services/dataFirebaseService"

const initialState = {
    allNews: [],
    error: null,
    loading: "idle",
};

const newsSlice = createSlice({
    name: "news",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllNewsData.pending, (state) => {
                state.loading = "pending";
            })
            .addCase(getAllNewsData.fulfilled, (state, action) => {
                state.loading = "fulfilled";
                state.allNews = action.payload;
            })
            .addCase(getAllNewsData.rejected, (state, action) => {
                state.loading = "rejected";
                state.error = action.payload;
            })
            .addCase(clean.fulfilled, (state) => {
                Object.assign(state, initialState);
            });
    }
});

export default newsSlice.reducer;

export const clean = createAsyncThunk(
    "news/clean",
    async () => {
        try {
            return null;
        } catch (error) {
            console.error("Error getting documents:", error);
            throw error;
        }
    }
);