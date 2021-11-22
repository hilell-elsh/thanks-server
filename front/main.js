const requirejs = require('requirejs');

const {getAllTodos, deleteTodo, addTodo, updateTodo} = require('./server');
// import {renderTask} from './task'

debugger

// async function getAllTodos() {
//     try {
//         const allTodos = await fetch("http://localhost:5114/api/todos")
//         const todos = await allTodos.json();
        
//         todos.map(task => {
//             renderTask(task)
//         })
//     } catch (err) {
//        console.log(err)
//     }
// }

function renderTask(todo) {
    debugger;
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

document.querySelector(".addTaskButton").onclick = function () { addTask() }
// document.querySelectorAll(".task").onclick = function () { taskClick(this) }
getAllTodos().then(todos => todos.map(task => {
    renderTask(task)
}));

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