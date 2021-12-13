
const fs = require('fs/promises');
const STORE_PATH = './users.json';

async function getUsers() {
    const data = await fs.readFile(STORE_PATH)
    return JSON.parse(data.toString());
}

async function setUsers(users=[]) {
    await fs.writeFile(STORE_PATH, JSON.stringify(users));
}

module.exports = {
    getUsers,
    setUsers
};