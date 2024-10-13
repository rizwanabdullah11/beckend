const express = require('express');
const { getTodos, addTodo, deleteTodo } = require('../controllers/todoController');
const auth = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/', auth, getTodos);
router.post('/', auth, addTodo);
router.delete('/:id', auth, deleteTodo);

module.exports = router;
