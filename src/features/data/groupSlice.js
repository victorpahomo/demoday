import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getGroupData, getAllGroupsData } from "../../services/dataFirebaseService"

const initialState = {
    group: {},
    allGroups: [],
    error: null,
    errorAll: null,
    loading: "idle",
    loadingAll: "idle",
};

const groupSlice = createSlice({
    name: "group",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllGroupsData.pending, (state) => {
                state.loadingAll = "pending";
            })
            .addCase(getAllGroupsData.fulfilled, (state, action) => {
                state.loadingAll = "fulfilled";
                state.allGroups = action.payload;
            })
            .addCase(getAllGroupsData.rejected, (state, action) => {
                state.loadingAll = "rejected";
                state.errorAll = action.payload;
            })
            .addCase(getGroupData.pending, (state) => {
                state.loading = "pending";
            })
            .addCase(getGroupData.fulfilled, (state, action) => {
                state.loading = "fulfilled";
                state.group = action.payload;
            })
            .addCase(getGroupData.rejected, (state, action) => {
                state.loading = "rejected";
                state.error = action.payload;
            })
            .addCase(clean.fulfilled, (state) => {
                Object.assign(state, initialState);
            });
    }
});

export default groupSlice.reducer;

export const clean = createAsyncThunk(
    "group/clean",
    async () => {
        try {
            return null;
        } catch (error) {
            console.error("Error getting documents:", error);
            throw error;
        }
    }
);