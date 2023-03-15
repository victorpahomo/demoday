import { createSlice } from "@reduxjs/toolkit";
import {getCoursesData} from "../../services/dataFirebaseService"

const initialState = {
    allCourses: [],
    error: null,
    loading: "idle",
};

const courseSlice = createSlice({
    name: "course",
    initialState,
    reducers: {
/*         courseStart: (state) => {
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
        }, */
    },
    extraReducers: (builder) => {
        builder 
            .addCase(getCoursesData.pending, (state) => {
                state.loading = "pending";
            })
            .addCase(getCoursesData.fulfilled, (state, action) => {
                state.loading = "fulfilled";
                state.allCourses = action.payload;
            })
            .addCase(getCoursesData.rejected, (state, action) => {
                state.loading = "rejected";
                state.error = action.payload;
            });
    }
});

/* export const {
    courseStart,
    courseFailure,
    getAllCourses

} = courseSlice.actions; */

export default courseSlice.reducer;
