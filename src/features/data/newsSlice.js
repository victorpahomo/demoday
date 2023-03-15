import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    AllNews: [],
    error: null,
    loading: true,
};

const newsSlice = createSlice({
    name: "news",
    initialState,
    reducers: {
        fetchDataStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        getAllNews: (state, action) => {
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
    getAllNews,
} = newsSlice.actions;

export default newsSlice.reducer;
