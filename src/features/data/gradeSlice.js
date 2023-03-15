import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    grade: {},
    attendance: {},
    allGrades: [],
    error: null,
    loading: true,
};

const gradeSlice = createSlice({
    name: "grade",
    initialState,
    reducers: {
        fetchDataStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        getGrade: (state, action) => {
            state.loading = false;
            state.allUsers = action.payload;
            state.error = null;
        },
        getAttendance: (state, action) => {
            state.loading = false;
            state.allUsers = action.payload;
            state.error = null;
        },
        getAllGrades: (state, action) => {
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
    getGrade,
    getAttendance,
    getAllGrades

} = gradeSlice.actions;

export default gradeSlice.reducer;
