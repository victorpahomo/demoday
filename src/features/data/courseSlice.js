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
        fetchDataStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        getAllCourses: (state, action) => {
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
    getAllCourses

} = courseSlice.actions;

export default courseSlice.reducer;
