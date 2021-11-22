
const fs = require('fs/promises');
const STORE_PATH = '../todos.json';

async function getTodos() {
    const data = await fs.readFile(STORE_PATH)
    return JSON.parse(data.toString());
}

async function setTodos(todos=[]) {
    await fs.writeFile(STORE_PATH, JSON.stringify(todos));
}

module.exports = {
    getTodos,
    setTodos
};