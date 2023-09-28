import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUserData, getAllUsersData, setUserLastNotification, setProfilePicture } from "../../services/dataFirebaseService"

const initialState = {
    user: {},
    allUsers: [],
    error: null,
    errorAll: null,
    errorPost: null,
    errorImage: null,
    loading: "idle",
    loadingAll: "idle",
    loadingPost: "idle",
    loadingImage: "idle",

};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
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
                state.loadingPost = "rejected";
                state.errorPost = action.payload;
            })
            .addCase(setProfilePicture.pending, (state) => {
                state.loadingImage = "pending";
            })
            .addCase(setProfilePicture.rejected, (state, action) => {
                state.loadingImage = "rejected";
                state.errorImage = action.payload;
            })
            .addCase(setProfilePicture.fulfilled, (state, action) => {
                state.loadingImage = "fulfilled";
                state.user.profilePicture = action.payload;
            })
            .addCase(clean.fulfilled, (state) => {
                Object.assign(state, initialState);
            })
            
    }
});


export default userSlice.reducer;

export const clean = createAsyncThunk(
    "user/clean",
    async () => {
        try {
            return null;
        } catch (error) {
            console.error("Error getting documents:", error);
            throw error;
        }
    }
);