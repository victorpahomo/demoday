import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    curriculum: {},
    allCurriculums: [],
    error: null,
    loading: true,
};

const curriculumSlice = createSlice({
    name: "curriculum",
    initialState,
    reducers: {
        fetchDataStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        getCurriculum: (state, action) => {
            state.loading = false;
            state.allUsers = action.payload;
            state.error = null;
        },
        getAllCurriculums: (state, action) => {
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
    getCurriculum,
    getAllCurriculums

} = curriculumSlice.actions;

export default curriculumSlice.reducer;
