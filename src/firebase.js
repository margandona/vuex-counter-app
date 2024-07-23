// src/firebase.js

// Importa las funciones necesarias del SDK de Firebase
import { initializeApp } from "firebase/app";
// Importa otros módulos de Firebase según sea necesario
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCi2CLRbkyz-ABTfzZhSVaCKsMwd3YUjy8",
  authDomain: "crud-colaboradores-5653e.firebaseapp.com",
  databaseURL: "https://crud-colaboradores-5653e-default-rtdb.firebaseio.com",
  projectId: "crud-colaboradores-5653e",
  storageBucket: "crud-colaboradores-5653e.appspot.com",
  messagingSenderId: "120713934873",
  appId: "1:120713934873:web:f63f7b1f82622c62f85288"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Exporta las instancias necesarias para su uso en el proyecto
// Exporta la autenticación si es necesaria
// export const auth = getAuth(app);

// Exporta Firestore si es necesario
// export const db = getFirestore(app);

export default app;
