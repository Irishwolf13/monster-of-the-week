// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOoyzfhomIiV-Myj2cBBmqbhaLpf2LRkY",
  authDomain: "monster-of-the-week-d510c.firebaseapp.com",
  projectId: "monster-of-the-week-d510c",
  storageBucket: "monster-of-the-week-d510c.appspot.com",
  messagingSenderId: "714864794210",
  appId: "1:714864794210:web:2532f0d8172c7f43250f3b",
  measurementId: "G-P6TGMXPCEW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();