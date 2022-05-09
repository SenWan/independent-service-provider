// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzDOZmDwzF6gy2YRPfj6xgEaiZ00hqN6o",
  authDomain: "gym-trainer-42e2d.firebaseapp.com",
  projectId: "gym-trainer-42e2d",
  storageBucket: "gym-trainer-42e2d.appspot.com",
  messagingSenderId: "607779829523",
  appId: "1:607779829523:web:c4c55ffa1873ad646a8ce6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;