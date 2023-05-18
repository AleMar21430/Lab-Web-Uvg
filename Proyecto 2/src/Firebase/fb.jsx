// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAG8yR3kxzr6xUo1fk18zrce0zravE2Rko",
  authDomain: "proyecto-itsi.firebaseapp.com",
  databaseURL: "https://proyecto-itsi-default-rtdb.firebaseio.com",
  projectId: "proyecto-itsi",
  storageBucket: "proyecto-itsi.appspot.com",
  messagingSenderId: "752717319759",
  appId: "1:752717319759:web:63355f56be51d994b8a43a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth()