const mongoose = require('mongoose');
const { Schema } = mongoose;

const TodoSchema = new Schema({
  title: String,
  dueDate: Date
}, {
  timestamps: true
});

const Todo = mongoose.model('Todo', TodoSchema);

module.exports = Todo;
