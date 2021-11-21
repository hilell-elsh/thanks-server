import {getAllTodos, deleteTodo, addTodo, updateTodo} from './server';
import {renderTask} from './task'

debugger

document.querySelector(".addTaskButton").onclick = function () { addTask() }
// document.querySelectorAll(".task").onclick = function () { taskClick(this) }

const tasks = getAllTodos();
tasks.forEach(renderTask);


function addTask() {
    let newTask = document.querySelector("#newTask")
    let task = document.createElement("li")
    task.setAttribute("class", "task")
    task.onclick = function () { taskClick(this) }
    task.ondblclick = function () { taskDblClick(this) }
    let text = document.createTextNode(newTask.value)
    task.appendChild(text)
    let list = document.querySelector(".toDoList")
    list.appendChild(task)
}

function taskClick(task) {
    task.style.textDecoration = "line-through"
    let done = document.querySelector(".doneList")
    done.appendChild(task)
}

function taskDblClick(task) {
    task.remove();
}

// 