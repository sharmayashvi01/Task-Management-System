const mongoose = require("mongoose");
const taskModel = require("../Model/taskModel");

const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    const taskTitle = await taskModel.findOne({title});
    if (taskTitle){
      return res.json({message : "Task existed"});
    }
    const taskDescription = description || "~~~~~~~~ ";
    const task = new taskModel({ title, description : taskDescription });
    await task.save();
    res.json("task saved");
  } catch (error) {
    res.status(500).json({
      message: "An error occured",
      error: error.message,
    });
  }
};

const updateTask = async (req, res) => {
  try {
    const id = req.params.id;
    const task = await taskModel.findById(id);
    const newStatus = !task.status;

    const taskWithNewStatus = await taskModel.findByIdAndUpdate(id, 
      {status : newStatus}
    ) 
    if (taskWithNewStatus) {
      return res.status(200).json({ message: "task updated" });
    } 
    else if (!taskWithNewStatus) {
      return res.status(404).json({ message: "task not found" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "error has occured", error: error.message });
  }
};

const getAllTask = async (req, res) => {
  try {
    let tasks = await taskModel.find();
    if (tasks.length === 0) {
      return res.status(404).json({ message: "no task present" });
    }
    return res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while fetching tasks",
      error: error.message,
    });
  }
};

const deleteTask = async (req, res) => {
  const delid = req.params.id;
  try {
    const task = await taskModel.findByIdAndDelete(delid);
    if(!task)
    {
      return res.status(404).json({message:"Task not found"});
    }
    return res.status(200).json({ message: "task deleted" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { createTask, updateTask, getAllTask, deleteTask };
