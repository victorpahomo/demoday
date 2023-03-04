import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../api/firebase'
import { loginUserStart,loginUserSuccess,loginUserFailure,logout } from '../features/auth/authSlice'

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

export const loginAndData = async (email, password) => {
    // Obtiene una referencia al documento del usuario en Firestore
    const docuRef = await signInWithEmailAndPassword(auth, email, password)

    // Comprueba si el usuario ya existe en Firestore
    const docSnap = await getDoc(docuRef);
    if (docSnap.exists()) {
        // Si el usuario ya existe, no se crea un nuevo documento
        console.log("El usuario ya está registrado en Firestore.");
    } else {
        // Si el usuario no existe, se crea un nuevo documento con su información
        await setDoc(docuRef, {
            email: userInfo.user.email,
            rol: "user",
            orders: []
        });
        console.log("Se ha creado un nuevo documento en Firestore para el usuario.");
    }
};

export const login = async (email, password,dispatch) => {

    dispatch(loginUserStart());
console.log("Start");
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        const user = userCredential.user;
        console.log("Success");

        const userData = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL
          };
        dispatch(loginUserSuccess(userData));
    } catch (error) {
        console.log("Error");
        dispatch(loginUserFailure(error.message));
    }
};