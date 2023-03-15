import { createSlice } from "@reduxjs/toolkit";
import { getAllCurriculumsData, getCurriculumData } from "../../services/dataFirebaseService"

const initialState = {
    curriculum: {},
    allCurriculums: [],
    errorAll: null,
    error: null,
    loadingAll: "idle",
    loading: "idle",

};

const curriculumSlice = createSlice({
    name: "curriculum",
    initialState,
    reducers: {
        /*         curriculumStart: (state) => {
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
                curriculumFailure: (state, action) => {
                    state.loading = false;
                    state.error = action.payload;
                }, */
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllCurriculumsData.pending, (state) => {
                state.loadingAll = "pending";
            })
            .addCase(getAllCurriculumsData.fulfilled, (state, action) => {
                state.loadingAll = "fulfilled";
                state.allCurriculums = action.payload;
            })
            .addCase(getAllCurriculumsData.rejected, (state, action) => {
                state.loadingAll = "rejected";
                state.errorAll = action.payload;
            })
            .addCase(getCurriculumData.pending, (state) => {
                state.loading = "pending";
            })
            .addCase(getCurriculumData.fulfilled, (state, action) => {
                state.loading = "fulfilled";
                state.curriculum = action.payload;
            })
            .addCase(getCurriculumData.rejected, (state, action) => {
                state.loading = "rejected";
                state.error = action.payload;
            });
    }
});

/* export const {
    curriculumStart,
    curriculumFailure,
    getCurriculum,
    getAllCurriculums

} = curriculumSlice.actions; */

export default curriculumSlice.reducer;
