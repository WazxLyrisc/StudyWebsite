// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAIS4uSCsGSGwGtkUEiMXk3X91_n0GM5pY",
    authDomain: "studywebsite-fbdc6.firebaseapp.com",
    projectId: "studywebsite-fbdc6",
    storageBucket: "studywebsite-fbdc6.firebasestorage.app",
    messagingSenderId: "43654871525",
    appId: "1:43654871525:web:50cd34217348d3f658970c",
    measurementId: "G-2ZMFK1XHCH"
};

firebase.initializeApp(firebaseConfig);

const auh = firebase.auth();

console.log(firebase.app().name)

const db = firebase.firestore();