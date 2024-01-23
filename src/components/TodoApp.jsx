import { useState } from "react";
import Task from "./Task";
import "./TodoApp.css";

const STATUS = {
  DONE: 1,
  PENDING: 0,
};

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);

  const [newTask, setNewTask] = useState("");

  const [editTask, setEditTask] = useState(null);

  const [error, setError] = useState(null);

  const handleChangeNewTask = (e) => {
    setNewTask(e.target.value);
  };

  const handleSubmit = () => {
    if (!newTask) {
      setError("New task cannot be empty!");
      return;
    }

    setError(null);

    setTasks((prevTasks) => [
      ...prevTasks,
      {
        id: Math.ceil(Math.random() * 100000).toString(),
        name: newTask,
        status: STATUS.PENDING,
      },
    ]);

    setNewTask("");
  };

  const handleUpdateTask = () => {
    if (!newTask) {
      setError("New task cannot be empty!");
      return;
    }

    setError(null);

    setTasks((prevTasks) =>
      prevTasks.map((task, index) => {
        if (task.id === editTask.id) {
          task.name = newTask;
        }

        return task;
      })
    );

    setEditTask(null);

    setNewTask("");
  };

  const handleUpdateStatus = (e, id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, index) => {
        const newStatus = e.target.checked ? STATUS.DONE : STATUS.PENDING;

        if (task.id === id) {
          task.status = newStatus;
        }

        return task;
      })
    );
  };

  const handleEditTask = (id) => {
    const editTask = tasks.find((task) => task.id === id);
    setEditTask(editTask);

    setNewTask(editTask.name);
  };

  const handleDeleteTask = (id) => {
    if (editTask?.id === id) {
      setEditTask(null);
      setNewTask("");
    }

    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

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

        {editTask ? (
          <button onClick={handleUpdateTask} className="submit-task">
            ✔️
          </button>
        ) : (
          <button onClick={handleSubmit} className="submit-task">
            ➕
          </button>
        )}
      </div>

      {error && <div className="error">{error}</div>}

      {tasks.length === 0 && (
        <div className="empty-list">Your list is empty !</div>
      )}

      <div className="todo-task-list">
        {tasks.map((task, index) => (
          <Task
            key={index}
            task={task}
            onChangeStatus={handleUpdateStatus}
            onEdit={handleEditTask}
            onDelete={handleDeleteTask}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoApp;
