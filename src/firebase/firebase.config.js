// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5cozvdBUqjVrTj1kovfbGmFk-F3IBCyQ",
  authDomain: "food-lover-d4878.firebaseapp.com",
  projectId: "food-lover-d4878",
  storageBucket: "food-lover-d4878.firebasestorage.app",
  messagingSenderId: "990366895890",
  appId: "1:990366895890:web:d17999db1e122b9b0c2dcb",
  measurementId: "G-PEHHCVZSRQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);