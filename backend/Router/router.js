const express = require("express");
const router = express.Router();

const {
  createTask,
  updateTask,
  getAllTask,
  deleteTask
} = require("../Controllers/taskController.js");

router.get("/all", getAllTask)
router.post("/create", createTask);
router.put("/update/:id", updateTask);
router.delete("/del/:id", deleteTask)

module.exports = router;
