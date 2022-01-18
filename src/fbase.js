// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";

import firebase from "firebase/compat/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

/*
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};
*/

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUsn-1EgK1u_GTG0DD6FPRzntOBwxbRyI",
  // apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "nwitter-2e382.firebaseapp.com",
  projectId: "nwitter-2e382",
  storageBucket: "nwitter-2e382.appspot.com",
  messagingSenderId: "380714898513",
  appId: "1:380714898513:web:451534981aba9cc1e91470"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);
export const firebaseInstance = firebase;
export const authService = firebase.auth();
export const dbService = firebase.firestore();
export const storageService = firebase.storage();