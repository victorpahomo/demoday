import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore';
import { auth,db } from '../api/firebase'
import { loginUserStart,loginUserSuccess,loginUserFailure,logout,signUpStart,signUpSuccess,signUpFailure } from '../features/auth/authSlice'

export const signUp = async (email, password,dispatch) => {
    dispatch(signUpStart());

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        console.log(userCredential);
        const objStudent = {
            "id": userCredential.user.uid,
            "cc": "1061897864",
            "picture": "",
            "email": "student@gmail.com",
            "name": "Pepito Hernandez",
            "groupStudent": "frontend-1",
            "status": "",
            "todo": [
              {
                "author": "Pepito Hernandez",
                "title": "Realizar el proyecto",
                "date": " 2020-10-10 ",
                "startTime": " 08:00 ",
                "endTime": " 10:00 ",
                "description": " Realizar el proyecto de la semana ",
                "destination": "Pepito Hernandez"
              }
            ]
        }
        const docuRef = doc(db, `users/${userCredential.user.uid}`)
        await setDoc(docuRef, objStudent)
        dispatch(signUpSuccess(userCredential))
    } catch (error) {
        dispatch(signUpFailure())
        console.log(error);
    }
}


export const login = async (email, password,dispatch) => {

    dispatch(loginUserStart());
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        const user = userCredential.user;

        const userData = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL
          };
        dispatch(loginUserSuccess(userData));
    } catch (error) {
        dispatch(loginUserFailure());
        console.log(error);
    }
};