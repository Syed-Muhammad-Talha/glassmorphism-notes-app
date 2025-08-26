const taskContainer = document.querySelector(".task-container");
const addTask = document.querySelector(".add-task");
let notes = document.querySelector(".input-box");

addTask.addEventListener("click" , () => {
    let taskItem = document.createElement("div");
    taskItem.className = "task-item";

    let inputBox = document.createElement("p");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");

    let del = document.createElement("button");
    del.className = "del-btn";
    del.setAttribute("title", "Delete Task");

    let delIcon = document.createElement("i");
    delIcon.className = "fa-solid fa-trash-can";

    del.appendChild(delIcon);

    del.addEventListener("click", () => {
        taskItem.remove();
    });



    taskItem.appendChild(inputBox);
    taskItem.appendChild(del);
    taskContainer.appendChild(taskItem);
});

