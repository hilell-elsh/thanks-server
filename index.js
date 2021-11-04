

const express = require('express');
const { getTodos, setTodos } = require('./todos');

const app = express();

const PORT = 5114;


app.use(express.json());
app.get('/api/todos', (req, res)=>{
    res.json(getTodos());
    res.end();
});
app.delete('/api/todos/:todoId', (req, res)=>{
    const {todoId} = req.params;
    const todos = getTodos();
    console.log(todos.find(todo => todo.id === todoId));
    console.log(todos.filter(todo => todo.id !== todoId));
    res.json(todos.find(todo => todo.id === todoId));
    setTodos(todos.filter(todo => todo.id !== todoId));
    res.end();
})
app.post('/api/todos', (req, res)=>{
    const newTodo = req.body;
    const todos = getTodos();
    setTodos([newTodo, ...getTodos()]);
    res.json(newTodo);
    res.end();
})
app.put('/api/todos/:todoId', (req, res)=>{
    const {todoId} = req.params;
    const updateTodo = req.body;
    const todos = getTodos();
    const replaceIndex = todos.findIndex(todo => todo.id === todoId);
    todos[replaceIndex] = updateTodo;
    setTodos(todos);
    res.json(updateTodo);
    res.end();      
})

app.listen(PORT, ()=>console.log("app is running in port: " + PORT));