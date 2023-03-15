import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userGrades: [],
    groupGrades: [],
    error: null,
    loading: true,
};

const gradeSlice = createSlice({
    name: "grade",
    initialState,
    reducers: {
        gradeStart: (state) => {
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
        },
    }
});

export const {
    gradeStart,
    gradeFailure,
    getUserGrades,
    getGroupGrades,

} = gradeSlice.actions;

export default gradeSlice.reducer;
