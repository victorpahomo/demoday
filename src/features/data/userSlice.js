import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    allUsers: [],
    error: null,
    loading: true,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        userStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        getUser: (state, action) => {
            state.loading = false;
            state.user = action.payload;
            state.error = null;
        },
        getAllUsers: (state, action) => {
            state.loading = false;
            state.allUsers = action.payload;
            state.error = null;
        },
        userFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    }
});

export const {
    userStart,
    userFailure,
    getUser,
    getAllUsers,

} = userSlice.actions;

export default userSlice.reducer;
