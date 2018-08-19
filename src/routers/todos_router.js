const express = require('express');
const router = express.Router();
const { Todo } = require('../models');


/// ------------------------------------
// Index
// ------------------------------------
router.get(['/', '/todos'], async (req, res, next) => {
  try {
    const today = new Date();
    const dueDate = [
      today.getFullYear(),
      (today.getMonth() + 1).toString().padStart(2, 0),
      today.getDate().toString().padStart(2, 0)
    ].join('-');
    const todos = await Todo.find();
    res.render('todos/index', { todos, dueDate });
  } catch (e) {
    next(e);
  }
});

/// ------------------------------------
// Create
// ------------------------------------
router.post('/todos', async (req, res, next) => {
  try {
    const title = req.body.todo.title;
    const timestamp = req.body.todo.due_date;
    const dueDate = new Date(timestamp);
    const todoParams = { title, dueDate};

    const todo = new Todo(todoParams);

    await todo.save();

    req.flash('success', 'Todo created!');
    res.redirect('/');
  } catch (e) {
    next(e);
  }
});


module.exports = router;
