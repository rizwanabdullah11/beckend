const Todo = require('../models/Todo');

// Get all Todos for the logged-in user
exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({ user: req.user.id });
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add a new Todo
exports.addTodo = async (req, res) => {
  const { title } = req.body;
  try {
    const todo = new Todo({ title, user: req.user.id });
    await todo.save();
    res.status(201).json(todo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a Todo
exports.deleteTodo = async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.json({ message: 'Todo deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
