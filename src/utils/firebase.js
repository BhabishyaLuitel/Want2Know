// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "w2k-completed.firebaseapp.com",
  projectId: "w2k-completed",
  storageBucket: "w2k-completed.appspot.com",
  messagingSenderId: "620634199388",
  appId: "1:620634199388:web:41cbe88a74b55001455d99"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
