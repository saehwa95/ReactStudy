// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6iiyNNiaYu38xi_c82CZTxQk8_jgYcIU",
  authDomain: "newdic-8cb7d.firebaseapp.com",
  projectId: "newdic-8cb7d",
  storageBucket: "newdic-8cb7d.appspot.com",
  messagingSenderId: "561051967959",
  appId: "1:561051967959:web:42f315668ff6723daaab92",
  measurementId: "G-PVF7NTMJ6R"
};


//initializeApp(firebaseConfig);
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);