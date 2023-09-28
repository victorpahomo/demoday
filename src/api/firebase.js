// Importa las funciones necesarias de Firebase
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Configuración de Firebase para la aplicación web
const firebaseConfig = {
    apiKey: "AIzaSyAddTn3phadQrvEv_UM85QvmFZ6E3IZpl0",
    authDomain: "demoday-ca1ba.firebaseapp.com",
    projectId: "demoday-ca1ba",
    storageBucket: "demoday-ca1ba.appspot.com",
    messagingSenderId: "1043637982378",
    appId: "1:1043637982378:web:8cd990ad4bf195ad15acd3"
};

// Inicializa Firebase y obtiene instancias necesarias
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)