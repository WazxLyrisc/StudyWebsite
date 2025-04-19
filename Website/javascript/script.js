let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
// let searchBtn = document.querySelector(".bx-search");

btn.onclick = function () {
    sidebar.classList.toggle("active");
}


// var modal = document.getElementById('id01');
// window.onclick = function (event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }

const taskForm = document.querySelector('#taskForm');
const title = document.querySelector('#taskName').value;
const content = document.querySelector('#taskInput-2').value;
const importance = document.querySelector('#importance').value;
const urgency = document.querySelector('#urgency').value;
function addTask() {
    // Add a new document with a generated id.
    db.collection("to-do").add({
        title: title,
        content: content,
        importance: importance,
        urgency: urgency
    })
        .then(() => {
            console.log("Add task successfully");
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
    // const taskText = document.getElementById("taskInput").value;
    // const matrix = document.getElementById("matrix").value;

    // if (!taskText){
    //     alert("Vui lòng nhập thông tin nhiệm vụ cần làm");
    //     return;
    // }

    // const li = document.createElement("li");
    // li.textContent = taskText + " ";

    // const delBtn = document.createElement("button-2");
    // delBtn.textContent = " Xóa ";
    // delBtn.onclick = () => li.remove();
    // li.appendChild(delBtn);

    taskForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("taskName").value;
        const importance = document.getElementById("importance").value;
        const urgency = document.getElementById("urgency").value;

        let category = "";
        if (importance === "important" && urgency === "urgent") {
            category = "do-now";
        }
        else if (importance === "important" && urgency === "not-urgent") {
            category = "schedule";
        }
        else if (importance === "not-important" && urgency === "urgent") {
            category = "delegate";
        }
        else {
            category = "eliminate";
        }

        const taskElement = document.createElement("div");
        taskElement.className = "task";
        taskElement.textContent = name;

        document.getElementById(category).appendChild(taskElement);

        taskForm.reset();
    });
}

// Firebase
function loadProducts() {
    const productsContainer = document.querySelector("#todo-container");
    productsContainer.innerHTML = '';

    db.collection("to-do").get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const todo = doc.data();
                const todoElement = document.createElement("div")
                todoElement.innerHTML = `
            Nhiệm vụ:<p>${todo.title}</p>
            Nội dung:<p>${todo.content}</p>`

                productsContainer.appendChild(todoElement);
            });

        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
}

window.onload = loadProducts;

