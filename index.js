const express = require('express');
// const core = require('core');

const app = express();

const PORT = 5114;

app.use(express.json());
const routes = require('./routes/todos')(app);

app.listen(PORT, ()=>console.log("app is running in port: " + PORT));