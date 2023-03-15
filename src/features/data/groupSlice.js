import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    group: {},
    AllGroups: [],
    error: null,
    loading: true,
};

const groupSlice = createSlice({
    name: "group",
    initialState,
    reducers: {
        fetchDataStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        getGroup: (state, action) => {
            state.loading = false;
            state.allUsers = action.payload;
            state.error = null;
        },
        getAllGroups: (state, action) => {
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
    getGroup,
    getAllGroups,

} = groupSlice.actions;

export default groupSlice.reducer;
