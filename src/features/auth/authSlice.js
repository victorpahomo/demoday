import { createSlice } from '@reduxjs/toolkit';
import { auth } from '../../api/firebase';
import { onAuthStateChanged } from 'firebase/auth';
const initialState = {
  user: null,
  error: null,
  loading: true,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginUserStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginUserSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = null;
    },
    loginUserFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    logout(state) {
      state.user = null;
      state.error = null;
      state.loading = false;
    },
  },
});

export const { loginUserStart, loginUserSuccess, loginUserFailure, logout } =
  authSlice.actions;

export const initializeSession = () => (dispatch) => {
  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    const currentUserData = currentUser ? {
        uid: currentUser.uid,
        email: currentUser.email,
        displayName: currentUser.displayName,
        photoURL: currentUser.photoURL
      } : null;

    dispatch(
        currentUserData ? loginUserSuccess(currentUserData) : logout()
    );
  });
  return unsubscribe;
};

export default authSlice.reducer;
