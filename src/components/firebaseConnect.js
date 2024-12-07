// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref } from "firebase/database";
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
export const analytics = getAnalytics(app);

// Lấy tham số đến CSDL
const database = getDatabase(app);
export const noteData = ref(database, 'dataForNote');
