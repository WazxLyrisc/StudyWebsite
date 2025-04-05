let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let searchBtn = document.querySelector(".bx-search");

btn.onclick = function () {
    sidebar.classList.toggle("active");
}
// đánh giá các nhiệm vụ với các mức độ gấp, bình thường hoặc không cần làm, gợi  ý 
// sử dụng cấu trúc If else  đánh giá từng nhiệm vụ, nếu quá khó, điểm kém thì đề nghị đến ChatGPT và Gemini giúp
//  đỡ hoặc không làm cái đó, còn nếu bình thường hoặc tốt thì sẽ ra hạn để hoàn thiện.

// const inputBox = document.getElementById("input-box");
// const listContainer = document.getElementById("list-container");
// function addTask(){
//     if(inputBox.value === ''){
//         alert("Bạn bắt buộc phải điền kế hoạch vào");
//     }
//     else{
//         let li = document.createElement("li");
//         li.innerHTML = inputBox.value;
//         listContainer.appendChild(li);
//         let span = document.createElement("span");
//         span.innerHTML = "\u00d7";
//         li.appendChild(span);
//     }
//     inputBox.value = "";
//     saveData();
// }

// listContainer.addEventListener("click", function(e){
//     if(e.target.tagName === "LI"){
//         e.target.classList.toggle("checked");
//         saveData();
//     }
//     else if(e.target.tagName === "SPAN"){
//         e.target.parentElement.remove();
//         saveData();
//     }
// },false);

// function saveData(){
//     localStorage.setItem("data", listContainer.innerHTML);
// }
// function showTask(){
//     listContainer.innerHTML =  localStorage.getItem("data");
// }
// showTask();

var modal = document.getElementById('id01');
window.onclick = function(event){
    if (event.target == modal){
        modal.style.display = "none";
    }
}

// function addTask(){
//     const taskText = document.getElementById("taskInput").value;
//     const difficulty = document.getElementById("difficulty").value;

//     if (!taskText){
//         alert("Vui lòng nhập thông tin nhiệm vụ cần làm");
//         return;
//     }

//     const li = document.createElement("li");
//     li.textContent = taskText + " ";

//     //Thêm nút xóa nhiệm vụ
//     const delBtn = document.createElement("button-2");
//     delBtn.textContent = " Xóa ";
//     delBtn.onclick = () => li.remove();
//     li.appendChild(delBtn);

//     //thêm vào đúng cột
//     if (difficulty === "easy"){
//         document.getElementById("easyTasks").appendChild(li);
//     }
//     else if(difficulty === "medium"){
//         document.getElementById("mediumTasks").appendChild(li);
//     }
//     else if(difficulty === "hard"){
//         document.getElementById("hardTasks").appendChild(li);
//     }

//     //Xóa ô nhập
//     document.getElementById("taskInput").value = "";
// }

function addTask(){
    const taskText = document.getElementById("taskInput").value;
    const important = document.getElementById("important").value;
    const urgent = document.getElementById("urgent").value;
    const para = document.getElementById("taskInput-2").value;
    const listContainer = document.getElementById("lis-container");

    // if (!taskText){
    //     alert("Vui lòng nhập thông tin nhiệm vụ cần làm");
    //     return;
    // }
    if (!taskText){
        alert("Vui lòng nhập tên nhiệm vụ");
        return;
    }

    if (!para){
        alert("Vui lòng nhập thông tin nội dung");
        return;
    }

    const li = document.createElement("li");
    li.textContent = taskText + " ";

    const delBtn = document.createElement("button-2");
    delBtn.textContent = "Xóa";
    delBtn = onclick = () => li.remove();
    li.appendChild(delBtn);
}