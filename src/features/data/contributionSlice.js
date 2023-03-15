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
        fetchDataStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        getAllContributions: (state, action) => {
            state.loading = false;
            state.allUsers = action.payload;
            state.error = null;
        },
        fetchDataFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    }
});

export const {
    fetchDataStart,
    fetchDataFailure,
    getAllContributions

} = contributionSlice.actions;

export default contributionSlice.reducer;
