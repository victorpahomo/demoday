import { createSlice } from '@reduxjs/toolkit'
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

export default authSlice.reducer
