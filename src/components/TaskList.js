import React from "react";
import Task from "./Task";
import { CATEGORIES, TASKS } from "../data";

function TaskList({ CATEGORIES, TASKS }) {
  const handleDelete = (e) => {
    const deleteTask = e.target.parentNode;
    deleteTask.remove();
  };
  return (
    <div className="tasks">
      {TASKS.map((task) => (
        <Task
          key={task.text}
          text={task.text}
          category={task.category}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default TaskList;
