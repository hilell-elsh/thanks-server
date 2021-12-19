
const fs = require('fs/promises');
const STORE_PATH = './todos.json';

const UserModel = require('../models/user');

function createUser (data) {
    const newUser = new UserModel(data);
    return newUser.save();
}

function getUser(query={}) {
    return UserModel.findOne({ query })    
}
function getUser(query={}) {
    return UserModel.findOne({ query })    
}

function getUsers(query={}) {
    return UserModel.find({ query })
}

function deleteUser(query={}) {
    return UserModel.findOneAndDelete({ query })    
}



// async function getTodos() {
//     const data = await fs.readFile(STORE_PATH);
//     return JSON.parse(data.toString());
// }

// async function setTodos(todos=[]) {
//     await fs.writeFile(STORE_PATH, JSON.stringify(todos));
// }

module.exports = {
    // getTodos,
    // setTodos
    createUser,
    getUser,
    getUsers,
    deleteUser
};