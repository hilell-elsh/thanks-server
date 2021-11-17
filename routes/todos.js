
const { getAllTodos, deleteTodo, addTodo, updateTodo } = require('../controllers/todos')

module.exports = (app) => {
    app.get('/api/todos', getAllTodos);
    app.delete('/api/todos/:todoId', deleteTodo)
    app.post('/api/todos', addTodo)
    app.put('/api/todos/:todoId', updateTodo)
}