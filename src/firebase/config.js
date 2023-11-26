// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlkziwRgieAHqNfOnOFY8gonNQK6HjILo",
  authDomain: "reactsala.firebaseapp.com",
  projectId: "reactsala",
  storageBucket: "reactsala.appspot.com",
  messagingSenderId: "1029333958028",
  appId: "1:1029333958028:web:1674eef4fa3a8bd1e4aaa9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initializeFirebase = () => app;