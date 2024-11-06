import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyC9a_wJVWNYt5tFPLii5dS6zds4pnQW_go",
    authDomain: "notereactfedu-6f22a.firebaseapp.com",
    databaseURL: "https://notereactfedu-6f22a-default-rtdb.firebaseio.com",
    projectId: "notereactfedu-6f22a",
    storageBucket: "notereactfedu-6f22a.firebasestorage.app",
    messagingSenderId: "83696074631",
    appId: "1:83696074631:web:f19151a22a1b3513d09d22",
    measurementId: "G-7ZJ83LLD5N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseConnect = getAnalytics(app);