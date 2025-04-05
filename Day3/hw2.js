// Chuyển đổi giữa các giao diện
document.getElementById("startQuiz").addEventListener("click", () => {
    document.getElementById("home").style.display = "none";
    document.getElementById("quiz").style.display = "block";
  });
  
  document.getElementById("viewRanking").addEventListener("click", () => {
    alert("Bảng xếp hạng sẽ được phát triển sau!");
  });
  
  document.getElementById("saveScore").addEventListener("click", () => {
    document.getElementById("quiz").style.display = "none";
    document.getElementById("saveDialog").style.display = "block";
  });
  
  document.getElementById("submitScore").addEventListener("click", () => {
    const playerName = document.getElementById("playerName").value;
    if (playerName) {
      alert(`Tên của bạn: ${playerName} đã được lưu!`);
      document.getElementById("saveDialog").style.display = "none";
      document.getElementById("home").style.display = "block";
    } else {
      alert("Vui lòng nhập tên!");
    }
  });
  