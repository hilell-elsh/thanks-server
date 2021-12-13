const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.ObjectId;

const TodoSchema = new mongoose.Schema({
    author: ObjectId,
    text: {type: String, required: true},
    compleated: {type: String, default: false},
    created: {type: Date, default: Date.now}
});

const TodoModel = mongoose.model('todo', TodoSchema);

module.exports = TodoModel;