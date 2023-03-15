import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allContributions: [],
    error: null,
    loading: true,
};

const contributionSlice = createSlice({
    name: "contribution",
    initialState,
    reducers: {
        contributionStart: (state) => {
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
        },
    }
});

export const {
    contributionStart,
    contributionFailure,
    getAllContributions

} = contributionSlice.actions;

export default contributionSlice.reducer;
