  function addTask() {
    const taskText = document.getElementById("taskInput").value;
    const difficulty = document.getElementById("difficulty").value;

    if (!taskText) {
      alert("Vui lòng nhập nhiệm vụ!");
      return;
    }

    const li = document.createElement("li");
    li.textContent = taskText + " ";
    
    // Thêm nút xoá
    const delBtn = document.createElement("button");
    delBtn.textContent = "❌ Xoá";
    delBtn.onclick = () => li.remove();
    li.appendChild(delBtn);

    // Thêm vào đúng cột
    if (difficulty === "easy") {
      document.getElementById("easyTasks").appendChild(li);
    } else if (difficulty === "medium") {
      document.getElementById("mediumTasks").appendChild(li);
    } else if (difficulty === "hard") {
      document.getElementById("hardTasks").appendChild(li);
    }

    // Xoá ô nhập
    document.getElementById("taskInput").value = "";
  }