export function renderTask(todo) {
    // let newTask = document.querySelector("#newTask")
    const task = document.createElement("li");
    const id = todo.id;
    task.setAttribute("class", "task");
    task.onclick = function () { taskClick(this, id) };
    task.ondblclick = function () { taskDblClick(this, id) };
    const text = document.createTextNode(todo.text);
    task.appendChild(text);
    document.querySelector(".toDoList").appendChild(task);
}

