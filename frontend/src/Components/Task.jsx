import React from "react";
import { FcCheckmark, FcCancel } from "react-icons/fc";

const Task = ({ task, index, updateTask, deleteTask }) => {
 
  return (
    <>
      <tr>
        <th scope="row">{index + 1}</th>
        <td>{task.title}</td>
        <td>{task.description}</td>
        <td>{task.status === true ? <FcCheckmark /> : <FcCancel />}</td>
        <td className="d-flex gap-2">
          <button onClick={() => updateTask(task._id)} className="btn btn-sm btn-warning">
            {task.status ? <p>Not Completed</p> : <p>Task Completed</p>}
          </button>
          <button onClick={() => deleteTask(task._id)} className="btn btn-sm btn-danger">
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default Task;
