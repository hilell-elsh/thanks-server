const { getTodos, setTodos } = require('../services/todos');

const getAllTodos = async (req, res) => {
    console.log("getAllTodos request");
    console.log(req.userId);
    const allTodos = (await getTodos()).filter(todos => todos.userId === req.userId);;
    res.json(allTodos)
    res.end();
}

const getOneTodo = async (req, res) => {
    console.log("getOneTodo request");
    const { todoId } = req.params;
    console.log(todoId);
    const todos = await getTodos();
    console.log(todos);
    console.log(todos.find(({id}) => id === todoId));
    res.json(todos.find(({id}) => id === todoId));
    res.end();
}

const deleteTodo = async (req, res) => {
    const { todoId } = req.params;
    const todos = await getTodos();
    console.log(todos.find(todo => todo.id === todoId));
    console.log(todos.filter(todo => todo.id !== todoId));
    res.json(todos.find(todo => todo.id === todoId));
    await setTodos(todos.filter(todo => todo.id !== todoId));
    res.end();
}

const addTodo = async (req, res) => {
    const newTodo = req.body;
    const todos = await getTodos();
    await setTodos([{...newTodo, "user": req.user.username}, ...todos]);
    res.json(newTodo);
    res.end();
}

const updateTodo = async (req, res) => {
    const { todoId } = req.params;
    const updatedTodo = req.body;
    const todos = await getTodos();

    // const replaceIndex = todos.findIndex(todo => todo.id === todoId);
    // todos[replaceIndex] = updatedTodo;
    
    const editedTodo = todos.find(({id}) => id === todoId);
    Object.assign(editedTodo, updatedTodo)
    
    await setTodos(todos);
    res.json(updatedTodo);
    res.end();
}

module.exports = {
    getAllTodos,
    getOneTodo,
    deleteTodo,
    addTodo,
    updateTodo
};