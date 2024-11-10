// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC9a_wJVWNYt5tFPLii5dS6zds4pnQW_go",
    authDomain: "notereactfedu-6f22a.firebaseapp.com",
    databaseURL: "https://notereactfedu-6f22a-default-rtdb.firebaseio.com",
    projectId: "notereactfedu-6f22a",
    storageBucket: "notereactfedu-6f22a.firebasestorage.app",
    messagingSenderId: "83696074631",
    appId: "1:83696074631:web:d2a11e68d75eb2bed09d22",
    measurementId: "G-8CMH3H84BY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const noteData = getAnalytics(app);