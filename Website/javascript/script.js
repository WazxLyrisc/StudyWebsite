let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");

btn.onclick = function () {
    sidebar.classList.toggle("active");
}



function addTask() {
    
    const taskForm = document.querySelector('#taskForm');
    const title = document.querySelector('#title').value;
    const content = document.querySelector('#content').value;
    const importance = document.querySelector('#importance').value;
    const urgency = document.querySelector('#urgency').value;

    if (!title || !content) {
        alert("Vui lòng nhập đầy đủ thông tin.");
        return;
    }

    db.collection("to-do").add({
        title: title,
        content: content,
        importance: importance,
        urgency: urgency,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
    })
        .then(() => {
            console.log("Add task successfully");
            taskForm.reset();
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });

}

// Firebase
function loadProducts() {
    const productsContainer = document.querySelector("#todo-container");
    productsContainer.innerHTML = '';

    db.collection("to-do").orderBy("createdAt", "desc").get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const todo = doc.data();
                const isImportant = todo.importance;
                const isUrgent = todo.urgency;

                let color = "#f1c40f";

                if (isImportant == "true" && isUrgent == "true") {
                    color = "#e74c3c";
                } else if (isImportant == "true" && isUrgent == "false") {
                    color = "#1874CD";
                } else if (isImportant == "false" && isUrgent == "true") {
                    color =  "#00CC00";
                }

                const todoElement = document.createElement("div")
                todoElement.style.borderLeft = `15px solid ${color}`;
                todoElement.innerHTML = `
            <p><strong>Nhiệm vụ:</strong> ${todo.title}</p>
            <p><strong>Nội dung:</strong> ${todo.content}</p>`

                productsContainer.appendChild(todoElement);
            });
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
}

function loadRedTask() {
    const redTaskContainer = document.querySelector('#red');
    redTaskContainer.innerHTML = '';

    db.collection('to-do').where('importance', '==', 'true').where('urgency', '==', 'true').get()
        .then((querySnapshot) => {

            querySnapshot.forEach((doc) => {
                const task = doc.data();
                const taskElement = document.createElement('div');
                taskElement.classList.add('task');
                taskElement.innerHTML = `
                    <p>${task.content}</p>
                `;
                redTaskContainer.appendChild(taskElement);
            });
        })
        .then(() => {
            console.log("Đã thành công lấy task")
        })
        .catch((error) => {
            console.error('Lỗi khi task: ', error);
        });
}

function loadBlueTask() {
    const blueTaskContainer = document.querySelector('#blue');
    blueTaskContainer.innerHTML = '';

    db.collection('to-do').where('importance', '==', 'true').where('urgency', '==', 'false').get()
        .then((querySnapshot) => {

            querySnapshot.forEach((doc) => {
                const task = doc.data();
                const taskElement = document.createElement('div');
                taskElement.classList.add('task');
                taskElement.innerHTML = `
                    <p> ${task.content}</p>
                `;
                blueTaskContainer.appendChild(taskElement);
            });
        })
        .then(() => {
            console.log("Đã thành công lấy task")
        })
        .catch((error) => {
            console.error('Lỗi khi task: ', error);
        });
}

function loadGreenTask() {
    const greenTaskContainer = document.querySelector('#green');
    greenTaskContainer.innerHTML = '';

    db.collection('to-do').where('importance', '==', 'false').where('urgency', '==', 'true').get()
        .then((querySnapshot) => {

            querySnapshot.forEach((doc) => {
                const task = doc.data();
                const taskElement = document.createElement('div');
                taskElement.classList.add('task');
                taskElement.innerHTML = `
                    <p>${task.content}</p>
                `;
                greenTaskContainer.appendChild(taskElement);
            });
        })
        .then(() => {
            console.log("Đã thành công lấy task")
        })
        .catch((error) => {
            console.error('Lỗi khi task: ', error);
        });
}

function loadYellowTask() {
    let yellowTaskContainer = document.querySelector('#yellow');
    yellowTaskContainer.innerHTML = '';

    db.collection('to-do').where('importance', '==', 'false').where('urgency', '==', 'false').get()
        .then((querySnapshot) => {

            querySnapshot.forEach((doc) => {
                const task = doc.data();
                const taskElement = document.createElement('div');
                taskElement.classList.add('task');
                taskElement.innerHTML = `
                    <p>${task.content}</p>
                `;
                yellowTaskContainer.appendChild(taskElement);
            });
        })
        .then(() => {
            console.log("Đã thành công lấy task")
        })
        .catch((error) => {
            console.error('Lỗi khi task: ', error);
        });
}

window.onload = function () {
    loadProducts();
    loadRedTask();
    loadBlueTask();
    loadGreenTask();
    loadYellowTask();
};