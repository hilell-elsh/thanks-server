const express = require('express');
// const core = require('core');
const todosRouter = require('./routes/todos');

const app = express();

const PORT = 5114;

app.use(express.json());
app.use(todosRouter);

app.listen(PORT, ()=>console.log("app is running in port: " + PORT));