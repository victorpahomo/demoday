import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

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

export const login = async (email, password) => {
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