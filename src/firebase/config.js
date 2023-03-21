
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import "firebase/auth";

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnSF1RV6GP2Oo9REXJP1P8eVMt_Qm74Zk",
  authDomain: "rn-social-app-d05d5.firebaseapp.com",
  projectId: "rn-social-app-d05d5",
  storageBucket: "rn-social-app-d05d5.appspot.com",
  messagingSenderId: "189340898768",
  appId: "1:189340898768:web:bbf63ff6d799f8c87c95d5",
  measurementId: "G-F1TRYNPCYZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

