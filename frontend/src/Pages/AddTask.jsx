import React, { useState } from "react";
import toast from "react-hot-toast";

const AddTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          description: description,
        }),
      });
      console.log(response);
      if (response.ok) {
        setTitle("");
        setDescription("");
        toast.success("Task Created");
      }
    } catch (error) {
      toast.error(
        error?.response?.data?.msg || "something went wrong from add task"
      );
      console.log(error);
    }
  };
  return (
    <>
      <form
        className="d-flex flex-column col-6 justify-content-center needs-validation px-4 py-4 bg-secondary border "
        novalidate
        onSubmit={onSubmitHandler}
      >
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Add your Task's Title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <label htmlFor="title" className="form-label">
            Add Your Task Title
          </label>
        </div>

        <div className="form-floating mb-3">
          <textarea
            class="form-control"
            placeholder="Add task description"
            id="description"
            style={{ height: "100px" }}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <label htmlFor="description" className="form-label">
            Add Task Description
          </label>
        </div>
        <div className="col-12 text-center">
          <button className="btn btn-primary" type="submit">
            Add Task
          </button>
        </div>
      </form>
    </>
  );
};

export default AddTask;
