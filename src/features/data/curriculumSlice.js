import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllCurriculumsData, getCurriculumData } from "../../services/dataFirebaseService"

const initialState = {
    curriculum: {},
    allCurriculums: [],
    errorAll: null,
    error: null,
    loadingAll: "idle",
    loading: "idle",

};

const curriculumSlice = createSlice({
    name: "curriculum",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllCurriculumsData.pending, (state) => {
                state.loadingAll = "pending";
            })
            .addCase(getAllCurriculumsData.fulfilled, (state, action) => {
                state.loadingAll = "fulfilled";
                state.allCurriculums = action.payload;
            })
            .addCase(getAllCurriculumsData.rejected, (state, action) => {
                state.loadingAll = "rejected";
                state.errorAll = action.payload;
            })
            .addCase(getCurriculumData.pending, (state) => {
                state.loading = "pending";
            })
            .addCase(getCurriculumData.fulfilled, (state, action) => {
                state.loading = "fulfilled";
                state.curriculum = action.payload;
            })
            .addCase(getCurriculumData.rejected, (state, action) => {
                state.loading = "rejected";
                state.error = action.payload;
            })
            .addCase(clean.fulfilled, (state) => {
                Object.assign(state, initialState);
            });
    }
});

export default curriculumSlice.reducer;

export const clean = createAsyncThunk(
    "curriculum/clean",
    async () => {
        try {
            return null;
        } catch (error) {
            console.error("Error getting documents:", error);
            throw error;
        }
    }
);