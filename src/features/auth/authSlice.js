import { createSlice } from '@reduxjs/toolkit';
import { auth, db } from '../../api/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
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
    loginUserFailure: (state) => {
      state.loading = false;
    },
    signUpStart: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    signUpSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = null;
    },
    signUpFailure: (state) => {
      state.loading = false;
    },
    logout(state) {
      state.user = null;
      state.error = null;
      state.loading = false;
    },

  },
});

export const { loginUserStart, loginUserSuccess, loginUserFailure, logout, signUpStart, signUpSuccess, signUpFailure } =
  authSlice.actions;

export const getRol = async (uid) => {
  const docRef = doc(db, `users/${uid}`);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    console.log('Document data:', docSnap.data().rol);
    return docSnap.data().rol;
  } else {
    console.log('No such document!');
  }
};

export const initializeSession = () => (dispatch) => {
  let currentUserData = null;
  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      getRol(currentUser.uid).then((rol) => {
        currentUserData = {
          uid: currentUser.uid,
          email: currentUser.email,
          displayName: currentUser.displayName,
          photoURL: currentUser.photoURL,
          rol: rol,
        };
        console.log(currentUserData);
        dispatch(loginUserSuccess(currentUserData));
      });
    } else {
      dispatch(logout());
    }
  });
return unsubscribe;
};

export default authSlice.reducer;
