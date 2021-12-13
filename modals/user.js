const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.ObjectId;

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

const UserSchema = new mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    displayName: {type: String, required: true},
    created: {type: Date, default: Date.now},
    email: {
        type: String,
        required: true,
        validate: emailRegex.test
    }
});

const UserModel = mongoose.model('todo', UserSchema);

module.exports = UserModel;