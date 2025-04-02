import React, { useState } from "react";

function TodoApp() {
    const [newTask, setNewTask] = useState("");
    const [tasks, setTasks] = useState([]);

    const addTask = () => {
        if (newTask.trim() !== "") {
            setTasks([...tasks, newTask]);
            setNewTask("");
        }
    };

    const removeTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    return (
        <div style={{ textAlign: "center", fontFamily: "Arial" }}>
            <h2>React To-Do List</h2>
            <input 
                type="text" 
                value={newTask} 
                onChange={(e) => setNewTask(e.target.value)} 
                placeholder="Enter a task"
            />
            <button onClick={addTask}>Add</button>

            <ul style={{ listStyle: "none", padding: 0 }}>
                {tasks.map((task, index) => (
                    <li key={index} style={{ background: "#f4f4f4", margin: "5px", padding: "10px", borderRadius: "5px" }}>
                        {task} <button onClick={() => removeTask(index)}>❌</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoApp;
