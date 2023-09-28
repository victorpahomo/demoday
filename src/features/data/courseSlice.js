import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCoursesData } from "../../services/dataFirebaseService"

const initialState = {
    allCourses: [],
    error: null,
    loading: "idle",
};

const courseSlice = createSlice({
    name: "course",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCoursesData.pending, (state) => {
                state.loading = "pending";
            })
            .addCase(getCoursesData.fulfilled, (state, action) => {
                state.loading = "fulfilled";
                state.allCourses = action.payload;
            })
            .addCase(getCoursesData.rejected, (state, action) => {
                state.loading = "rejected";
                state.error = action.payload;
            })
            .addCase(clean.fulfilled, (state) => {
                Object.assign(state, initialState);
            });
    }
});

export default courseSlice.reducer;

export const clean = createAsyncThunk(
    "course/clean",
    async () => {
        try {
            return null;
        } catch (error) {
            console.error("Error getting documents:", error);
            throw error;
        }
    }
);