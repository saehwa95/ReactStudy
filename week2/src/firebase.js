// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhd09TSKT7aKxyk_1fzv23zYq3ut2P05U",
  authDomain: "dictionary-d6144.firebaseapp.com",
  projectId: "dictionary-d6144",
  storageBucket: "dictionary-d6144.appspot.com",
  messagingSenderId: "872402870515",
  appId: "1:872402870515:web:280f75a371cea186511786",
  measurementId: "G-VGJDJ65L8K"
};


//initializeApp(firebaseConfig);
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);