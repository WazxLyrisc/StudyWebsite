// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyAIS4uSCsGSGwGtkUEiMXk3X91_n0GM5pY",
//     authDomain: "studywebsite-fbdc6.firebaseapp.com",
//     projectId: "studywebsite-fbdc6",
//     storageBucket: "studywebsite-fbdc6.firebasestorage.app",
//     messagingSenderId: "43654871525",
//     appId: "1:43654871525:web:50cd34217348d3f658970c",
//     measurementId: "G-2ZMFK1XHCH"
// };

const firebaseConfig = {
    apiKey: "AIzaSyC3ig0W8pObVMAev3vw0ZDfxlSrKt8-CJc",
    authDomain: "giangson-jsi24.firebaseapp.com",
    projectId: "giangson-jsi24",
    storageBucket: "giangson-jsi24.firebasestorage.app",
    messagingSenderId: "906840388172",
    appId: "1:906840388172:web:36a63cfe6e5f31e18a3ae9",
    measurementId: "G-BPBX07284Y"
};

firebase.initializeApp(firebaseConfig);

const auh = firebase.auth();

const db = firebase.firestore();