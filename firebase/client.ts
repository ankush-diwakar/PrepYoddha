// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJkWPkssC2jnw0c4e7-CVF1RzCw3e0M44",
  authDomain: "prepyoddha.firebaseapp.com",
  projectId: "prepyoddha",
  storageBucket: "prepyoddha.firebasestorage.app",
  messagingSenderId: "458558778977",
  appId: "1:458558778977:web:bbc9cfd310538e628c0420",
  measurementId: "G-D06W1NC9Q8"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
 
export const auth = getAuth(app);
export const db = getFirestore(app);
