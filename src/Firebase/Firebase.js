// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDM5Qlql-SjecSBaPfDGeBpGExgkMPvj0M",
  authDomain: "react-loginpage-38343.firebaseapp.com",
  projectId: "react-loginpage-38343",
  storageBucket: "react-loginpage-38343.appspot.com",
  messagingSenderId: "106983645494",
  appId: "1:106983645494:web:da05fe494eb96feaf55397",
  measurementId: "G-Z95Q5R1S8N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);