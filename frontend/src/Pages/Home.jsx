import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

import Task from "../Components/Task";
const Home = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getAllTasks();
  }, []);

  const getAllTasks = async () => {
    try {
      const response = await fetch("http://localhost:3000/all", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const data = await response.json();
        setTasks(data.tasks);
      }
    } catch (error) {
      console.log("Failed to load task: ", error);
    }
  };

  const updateTask = async (taskId) => {
    try {
      const response = await fetch(`http://localhost:3000/update/${taskId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response);
      if (response.ok) {
        toast.success("Task Updated");
        setTasks((prevTasks) =>
          prevTasks.map((task) =>
            task._id === taskId ? { ...task, status: !task.status } : task
          )
        );
      } else {
        const errorData = await response.json();
        toast.error(errorData.message || "Task updation failed");
      }
    } catch (error) {
      toast.error("coming from catch", error.message);
    }
  };

  const deleteTask = async (taskId) => {
    try {
      const response = await fetch(`http://localhost:3000/del/${taskId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        toast.error("Task Deleted");
        setTasks((presentTasks) =>
          presentTasks.filter((task) => task._id !== taskId)
        );
      }
    } catch (error) {
      toast.error(error.message || "An error occurred while deleting the task");
    }
  };
  return (
    <div className="col-sm-6 mx-auto">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.length > 0 ? (
            tasks.map((task, i) => (
              <Task
                key={task.id}
                task={task}
                index={i}
                updateTask={updateTask}
                deleteTask={deleteTask}
              />
            ))
          ) : (
            <tr>
      <td colSpan="5" className="text-center">
        No tasks available
      </td>
    </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
