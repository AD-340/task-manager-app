import React, { useState } from "react";

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState("");

  const addTask = () => {
    if (!newTaskTitle.trim()) return;
    const newTask = {
      id: Date.now(),
      title: newTaskTitle,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setNewTaskTitle("");
  };

  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)));
  };

  return (
    <div style={{ maxWidth: 400, margin: "2rem auto", padding: 20, border: "1px solid #ccc", borderRadius: 8 }}>
      <h2>Task Manager</h2>
      <div>
        <input
          type="text"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          placeholder="Enter task title"
        />
        <button onClick={addTask} style={{ marginLeft: 8 }}>
          Add Task
        </button>
      </div>
      <ul style={{ marginTop: 24, padding: 0 }}>
        {tasks.map((task) => (
          <li key={task.id} style={{ marginBottom: 8, listStyle: "none" }}>
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
                marginRight: 8,
              }}
            >
              {task.title}
            </span>
            <button onClick={() => toggleTaskCompletion(task.id)}>
              {task.completed ? "Mark Incomplete" : "Mark Completed"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskManager;
