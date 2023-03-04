import { createSlice } from '@reduxjs/toolkit'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
const initialState = {}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signUpSuccess: (state, action) => {
            // Aquí puedes actualizar el estado con cualquier información relevante
        },
        signUpFailure: (state, action) => {
            // Aquí puedes manejar el error si la función signUp falla
        },
        signInSuccess: (state, action) => {
            // Aquí puedes actualizar el estado con cualquier información relevante
        },
        signInFailure: (state, action) => {
            // Aquí puedes manejar el error si la función signUp falla
        }

    }
});

export const { signUpSuccess, signUpFailure, signInSuccess,signInFailure } = authSlice.actions

export const signUp = (email, password) => async dispatch => {
    try {
        const userInfo = await createUserWithEmailAndPassword(auth, email, password)
        const docuRef = doc(db, `users/${userInfo.user.uid}`)
        await setDoc(docuRef, { email: email, rol: "user", orders: [] })
        dispatch(signUpSuccess(userInfo))
    } catch (error) {
        dispatch(signUpFailure(error))
    }
}

export default authSlice.reducer
