import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import { ref, get, set } from "firebase/database";
// import { getDatabase } from "firebase/database";

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

export const firebaseConnect = app;
export const analytics = getAnalytics(app);

// const database = getDatabase(app);

// Lấy dữ liệu
// const data = ref(database, 'dataForNote/');
// get(data).then((snapshot) => {
//     console.log(snapshot.val());
// });

// Sửa dữ liệu
// const data = ref(database, 'dataForNote/node2');
// set(data, {
//     id: 2,
//     title: 'Ghi chú ngày 08/11/2024',
//     content: 'Hoàn thành task báo cáo'
// }).then(() => {
//     console.log('Cập nhật dữ liệu thành công');
// })