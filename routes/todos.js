const { Router } = require('express');
const { getAllTodos, deleteTodo, addTodo, updateTodo } = require('../controllers/todos')

const todosRouter = () => {
    const router = Router();
    router.get('/api/todos', getAllTodos);
    router.delete('/api/todos/:todoId', deleteTodo)
    router.post('/api/todos', addTodo)
    router.put('/api/todos/:todoId', updateTodo)

    return router;
}

module.exports = {todosRouter};