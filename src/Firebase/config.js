// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWzwxhz3dRPmjiVphEea3UdKyucEJubX0",
  authDomain: "techtest-5ba64.firebaseapp.com",
  projectId: "techtest-5ba64",
  storageBucket: "techtest-5ba64.appspot.com",
  messagingSenderId: "264587181193",
  appId: "1:264587181193:web:24d95f0694eea66efc5a58",
  measurementId: "G-XL6PN018Z8"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore()