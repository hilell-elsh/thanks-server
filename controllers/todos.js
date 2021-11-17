const { getTodos, setTodos } = require('../services/todos');

const getAllTodos = (req, res) => {
    res.json(getTodos());
    res.end();
}

const deleteTodo = (req, res) => {
    const { todoId } = req.params;
    const todos = getTodos();
    console.log(todos.find(todo => todo.id === todoId));
    console.log(todos.filter(todo => todo.id !== todoId));
    res.json(todos.find(todo => todo.id === todoId));
    setTodos(todos.filter(todo => todo.id !== todoId));
    res.end();
}

const addTodo = (req, res) => {
    const newTodo = req.body;
    const todos = getTodos();
    setTodos([newTodo, ...getTodos()]);
    res.json(newTodo);
    res.end();
}

const updateTodo = (req, res) => {
    const { todoId } = req.params;
    const updateTodo = req.body;
    const todos = getTodos();
    const replaceIndex = todos.findIndex(todo => todo.id === todoId);
    todos[replaceIndex] = updateTodo;
    setTodos(todos);
    res.json(updateTodo);
    res.end();
}

module.exports = {
    getAllTodos,
    deleteTodo,
    addTodo,
    updateTodo
};