// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBR6z0o-dKZZ_A5OY0rYb9HXRwfmK8RAQY",
  authDomain: "rnotes-623e7.firebaseapp.com",
  projectId: "rnotes-623e7",
  storageBucket: "rnotes-623e7.firebasestorage.app",
  messagingSenderId: "117918953825",
  appId: "1:117918953825:web:5993264babd7999ced9520",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");
