import { createSlice } from "@reduxjs/toolkit";
import {getContributionsData} from "../../services/dataFirebaseService"

const initialState = {
    allContributions: [],
    error: null,
    loading: "idle",
};

const contributionSlice = createSlice({
    name: "contribution",
    initialState,
    reducers: {
/*         contributionStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        getAllContributions: (state, action) => {
            state.loading = false;
            state.allUsers = action.payload;
            state.error = null;
        },
        contributionFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }, */
    },
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
            });
    }
});

/* export const {
    contributionStart,
    contributionFailure,
    getAllContributions

} = contributionSlice.actions; */

export default contributionSlice.reducer;
