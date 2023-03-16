import { createSlice } from "@reduxjs/toolkit";
import { getUserData, getAllUsersData, setUserLastNotification } from "../../services/dataFirebaseService"

const initialState = {
    user: null,
    allUsers: [],
    error: null,
    errorAll: null,
    errorPost: null,
    loading: "idle",
    loadingAll: "idle",
    loadingPost: "idle",

};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        /*         userStart: (state) => {
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
                }, */
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllUsersData.pending, (state) => {
                state.loadingAll = "pending";
            })
            .addCase(getAllUsersData.fulfilled, (state, action) => {
                state.loadingAll = "fulfilled";
                state.allUsers = action.payload;
            })
            .addCase(getAllUsersData.rejected, (state, action) => {
                state.loadingAll = "rejected";
                state.errorAll = action.payload;
            })
            .addCase(getUserData.pending, (state) => {
                state.loading = "pending";
            })
            .addCase(getUserData.fulfilled, (state, action) => {
                state.loading = "fulfilled";
                state.user = action.payload;
            })
            .addCase(getUserData.rejected, (state, action) => {
                state.loading = "rejected";
                state.error = action.payload;
            })
            .addCase(setUserLastNotification.pending, (state) => {
                state.loadingPost = "pending";
            })
            .addCase(setUserLastNotification.rejected, (state, action) => {
                state.loading = "rejected";
                state.errorPost = action.payload;
            })
    }
});


export default userSlice.reducer;
