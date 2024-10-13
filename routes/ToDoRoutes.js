const { Router } = require("express");
const {
  getToDos,
  saveToDo,
  updateToDo,
  deleteToDo,
} = require("../controller/ToDoController");

const router = Router();

router.get("/get", getToDos);          
router.get("/save", saveToDo);         
router.get("/update/:id", updateToDo);  
router.get("/delete/:id", deleteToDo);

module.exports = router;
