// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "want2know-6e599.firebaseapp.com",
  projectId: "want2know-6e599",
  storageBucket: "want2know-6e599.appspot.com",
  messagingSenderId: "929593423313",
  appId: "1:929593423313:web:364202f6fc04c5686b9cf0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;