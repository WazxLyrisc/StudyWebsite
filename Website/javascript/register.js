const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let searchBtn = document.querySelector(".bx-search");

btn.onclick = function () {
    sidebar.classList.toggle("active");
}

// Register Form


const inpUsername = document.querySelector(".inp-username");
const inpEmail = document.querySelector(".inp-email");
const inpPwd = document.querySelector(".inp-pwd");
const registerForm = document.querySelector("#register-form");


function handleRegister(event) {
    event.preventDefault()

    let username = inpUsername.value;
    let email = inpEmail.value;
    let password = inpPwd.value;

    if (!username || !email || !password) {
        alert("Vui lòng nhập đầy đủ thông tin");
    }


    //Tạo tài khoản
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;
            let userData = {
                username,
                email,
                password
            }
            alert("Đăng Ký thành công");
            window.location.href = "./index.html";
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(`Lỗi: ${errorMessage}`);
            console.log(errorMessage)
        });
}

registerForm.addEventListener("submit", handleRegister);


// Login Form

const inpEmail2 = document.querySelector(".inp-email-2");
const inpPwd2 = document.querySelector(".inp-pwd-2");
const loginForm = document.querySelector("#login-form");

function handleLogin(event) {
    event.preventDefault();

    let email = inpEmail2.value;
    let password = inpPwd2.value;

    if (!email || !password) {
        alert("Sai mật khẩu hoặc email, vui lòng thử lại");
    }

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            alert("Đăng nhập thành công");
            window.location.href = "./index.html";
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage);
        });
}
loginForm.addEventListener("submit", handleLogin);