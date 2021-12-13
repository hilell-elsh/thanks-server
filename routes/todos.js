const { checkUser } = require('../middlewares/check-user');
// const { Router } = require('express');
const { getAllTodos,
        getOneTodo,
        deleteTodo,
        addTodo,
        updateTodo 
    } = require('../controllers/todos')

const todosRouter = (router) => {
    router.use(checkUser)
    // const router = Router();
    router.get('/api/todos', getAllTodos);
    router.get('/api/todos/:todoId', getOneTodo);
    router.delete('/api/todos/:todoId', deleteTodo);
    router.post('/api/todos', addTodo);
    router.put('/api/todos/:todoId', updateTodo);

    return router;
}

module.exports = todosRouter;