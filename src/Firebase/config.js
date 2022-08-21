// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChvYAkoDoYAhQFFudqyVgV5Gp-hw1TUK8",
  authDomain: "testtech2-ce486.firebaseapp.com",
  projectId: "testtech2-ce486",
  storageBucket: "testtech2-ce486.appspot.com",
  messagingSenderId: "1038548869749",
  appId: "1:1038548869749:web:20c61cdfae67b7763f4e3c",
  measurementId: "G-H2813NR617"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore()