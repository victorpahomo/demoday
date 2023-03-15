import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allCourses: [],
    error: null,
    loading: true,
};

const courseSlice = createSlice({
    name: "course",
    initialState,
    reducers: {
        courseStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        getAllCourses: (state, action) => {
            state.loading = false;
            state.allUsers = action.payload;
            state.error = null;
        },
        courseFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    }
});

export const {
    courseStart,
    courseFailure,
    getAllCourses

} = courseSlice.actions;

export default courseSlice.reducer;
