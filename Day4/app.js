// import { auth, db, provider, signInWithPopup, signOut, collection, addDoc } from "./firebase-config.js";
import { analytics } from "./firebase-config";

const loginBtn = document.getElementById("googleLogin");
const saveScoreBtn = document.getElementById("saveScore");
const quizSection = document.getElementById("quiz");
const loginSection = document.getElementById("login");

let user = null;

// Xử lý đăng nhập Google
loginBtn.addEventListener("click", async () => {
  try {
    // const result = await signInWithPopup(auth, provider);
    const result = await signInWithPopup(analytics);
    user = result.user;
    alert(`Chào mừng ${user.displayName}!`);
    loginSection.style.display = "none";
    quizSection.style.display = "block";
  } catch (error) {
    alert("Lỗi đăng nhập: " + error.message);
  }
});

// Lưu điểm vào Firestore
saveScoreBtn.addEventListener("click", async () => {
  if (!user) {
    alert("Bạn cần đăng nhập trước khi lưu điểm!");
    return;
  }

  const score = document.getElementById("score").textContent;
  const now = new Date().toLocaleString();

  try {
    await addDoc(collection(db, "scores"), {
      username: user.displayName,
      score: parseInt(score),
      timestamp: now
    });
    alert("Lưu điểm thành công!");
  } catch (error) {
    alert("Lỗi khi lưu điểm: " + error.message);
  }
});
