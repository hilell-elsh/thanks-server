require('dotenv').config();
const express = require('express');

const connectToDb = require('./models');

// const core = require('core');

const port = process.env.PORT || 5115;

const app = express();
app.use(express.json());
// app.use(core());
require('./routes/todos')(app);
// const todosRouter = 
// app.use(todosRouter);


connectToDb()
    .then(app.listen(port, ()=>console.log("app is running in port: " + port)));