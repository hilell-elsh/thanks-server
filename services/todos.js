
const fs = require('fs');
const STORE_PATH = '../todos.json';

function getTodos() {
    return require(STORE_PATH);
}

function setTodos(todos=[]) {
    fs.writeFileSync(STORE_PATH, JSON.stringify(todos));
}

module.exports = {
    getTodos,
    setTodos
};