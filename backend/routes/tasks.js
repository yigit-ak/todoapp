const express = require("express");
const router = express.Router();
const {
  getAllTasks,
  addTask,
  getTask,
  deleteTask,
  updateTask,
} = require("../controllers/tasks");

// get all tasks
router.get("/", getAllTasks);

// add task
router.post("/", addTask);

// operations by task id
router.route("/:taskId").get(getTask).delete(deleteTask).patch(updateTask);

module.exports = router;
