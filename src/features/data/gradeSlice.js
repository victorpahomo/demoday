import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUserGradesData, getGroupGradesData } from "../../services/dataFirebaseService"

const initialState = {
    userGrades: [],
    groupGrades: [],
    error: null,
    errorAll: null,
    loading: "idle",
    loadingAll: "idle",
};

const gradeSlice = createSlice({
    name: "grade",
    initialState,
    reducers: {
        /*         gradeStart: (state) => {
                    state.loading = true;
                    state.error = null;
                },
                getUserGrades: (state, action) => {
                    state.loading = false;
                    state.allUsers = action.payload;
                    state.error = null;
                },
                getGroupGrades: (state, action) => {
                    state.loading = false;
                    state.allUsers = action.payload;
                    state.error = null;
                },
                gradeFailure: (state, action) => {
                    state.loading = false;
                    state.error = action.payload;
                }, */
    },
    extraReducers: (builder) => {
        builder
            .addCase(getGroupGradesData.pending, (state) => {
                state.loadingAll = "pending";
            })
            .addCase(getGroupGradesData.fulfilled, (state, action) => {
                state.loadingAll = "fulfilled";
                state.groupGrades = action.payload;
            })
            .addCase(getGroupGradesData.rejected, (state, action) => {
                state.loadingAll = "rejected";
                state.errorAll = action.payload;
            })
            .addCase(getUserGradesData.pending, (state) => {
                state.loading = "pending";
            })
            .addCase(getUserGradesData.fulfilled, (state, action) => {
                state.loading = "fulfilled";
                state.userGrades = action.payload;
            })
            .addCase(getUserGradesData.rejected, (state, action) => {
                state.loading = "rejected";
                state.error = action.payload;
            })
            .addCase(clean.fulfilled, (state) => {
                Object.assign(state, initialState);
            });
    }
});

/* export const {
    gradeStart,
    gradeFailure,
    getUserGrades,
    getGroupGrades,

} = gradeSlice.actions; */

export default gradeSlice.reducer;

export const clean = createAsyncThunk(
    "grade/clean",
    async () => {
        try {
            return null;
        } catch (error) {
            console.error("Error getting documents:", error);
            throw error;
        }
    }
);