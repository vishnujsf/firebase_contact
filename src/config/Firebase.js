// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgZxv5jneg4NTDcQtL4hqUpia7_TzV47k",
  authDomain: "vite-contact-3d096.firebaseapp.com",
  projectId: "vite-contact-3d096",
  storageBucket: "vite-contact-3d096.firebasestorage.app",
  messagingSenderId: "660867295720",
  appId: "1:660867295720:web:4eca7a9e1a00e17de19c5d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)