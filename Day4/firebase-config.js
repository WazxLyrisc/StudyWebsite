// // Import Firebase SDK
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
// import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
// import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

// // Cấu hình Firebase
// const firebaseConfig = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
//   projectId: "YOUR_PROJECT_ID",
//   storageBucket: "YOUR_PROJECT_ID.appspot.com",
//   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//   appId: "YOUR_APP_ID"
// };

// // Khởi tạo Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth();
// const db = getFirestore(app);
// const provider = new GoogleAuthProvider();

// // Xuất module
// export { auth, db, provider, signInWithPopup, signOut, collection, addDoc };



  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
//   import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
//   import { initializeAppgetFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBTkFrs5bzUhrYz7jbxTEZZwWMyI3teyLI",
    authDomain: "quiz-game-mindx.firebaseapp.com",
    projectId: "quiz-game-mindx",
    storageBucket: "quiz-game-mindx.firebasestorage.app",
    messagingSenderId: "367157691904",
    appId: "1:367157691904:web:ff646057e48a59f5013ae5",
    measurementId: "G-CQ3RBS6FQW"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
//   const db = getFirestore(app);
//   const auth = getAuth();
//   const provider = new GoogleAuthProvider();

//   export { auth, analytics, provider, signInWithPopup, signOut, collection, addDoc };
//   export { auth, db, provider, signInWithPopup, signOut, collection, addDoc };
  export {analytics};