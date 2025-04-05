const firebaseConfig = {
    apiKey: "AIzaSyBOrjuotapnF3xC-wZp7n4botSh4gGwoXQ",
              authDomain: "signup-13255.firebaseapp.com",
              projectId: "signup-13255",
              storageBucket: "signup-13255.firebasestorage.app",
              messagingSenderId: "524211327539",
              appId: "1:524211327539:web:6f7c329899278c99728946",
              measurementId: "G-9KGC8JYB7V"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

function signup() {
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
    auth.createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
            document.getElementById("message").innerText = "Đăng ký thành công!";
        })
        .catch(error => {
            document.getElementById("message").innerText = error.message;
        });
}

function login() {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
    auth.signInWithEmailAndPassword(email, password)
        .then(userCredential => {
            document.getElementById("message").innerText = "Đăng nhập thành công!";
        })
        .catch(error => {
            document.getElementById("message").innerText = error.message;
        });
}

function loginWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
        .then(result => {
            document.getElementById("message").innerText = "Đăng nhập với Google thành công!";
        })
        .catch(error => {
            document.getElementById("message").innerText = error.message;
        });
}