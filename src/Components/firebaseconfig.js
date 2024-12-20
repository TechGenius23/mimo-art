// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_8yP9TRcNVTx6Osyaurcsuw7JhFIxJXY",
  authDomain: "mimo-art.firebaseapp.com",
  projectId: "mimo-art",
  storageBucket: "mimo-art.firebasestorage.app",
  messagingSenderId: "614884478826",
  appId: "1:614884478826:web:1e7d0f4f26184d9f009f13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;