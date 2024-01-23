import { useState } from "react";
import Task from "./Task";
import "./TodoApp.css";

const STATUS = { 
  DONE: 1,
  PENDING: 0
}

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);

  const [newTask, setNewTask] = useState("");

  const handleChangeNewTask = (e) => { 
    setNewTask(e.target.value)
  }

  const handleSubmit = () => { 
    setTasks((prevTasks) => [...prevTasks,{
      id: Math.random().toString(),
      name: newTask,
      status: STATUS.PENDING
    }
    ])

    console.log(tasks);
  }

  return (
    <div className="todo-app">
      <div className="todo-title">
        <h2>To-do App</h2>
      </div>

      <div className="todo-taskbox">
        <input
          className="todo-create"
          type="text"
          name="name"
          value={newTask}
          onChange={handleChangeNewTask}
          placeholder="Add your task here"
        />
        <button onClick={handleSubmit} className="submit-task">
          ➕
        </button>
      </div>
      <div className="todo-task-list">
        {tasks.map((task, index) => (
          <Task key={index} />
        ))}
      </div>
    </div>
  );
};

export default TodoApp;
