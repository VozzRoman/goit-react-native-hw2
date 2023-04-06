
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyBi24qrQEzu_pb1nWYFw7TE2FvwhL8p3bA",
	authDomain: "native-app-995a9.firebaseapp.com",
	projectId: "native-app-995a9",
	storageBucket: "native-app-995a9.appspot.com",
	messagingSenderId: "802910986269",
	appId: "1:802910986269:web:3566e8e9187d2a97cf66f4",
	measurementId: "G-ZC5XHHL8VV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

