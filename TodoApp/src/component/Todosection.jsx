import { useState } from 'react';
import './Todosection.css';

const Todosection = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const handleDelete = (indexToRemove) => {
    const updated = tasks.filter((_, index) => index !== indexToRemove);
    setTasks(updated);
  };

  return (
    <div className="todo-container">
      <form className="todo">
        <input
          type="text"
          placeholder="Enter the task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit" onClick={handleClick}>Submit</button>
      </form>

      <ul className="todo-list">
        {tasks.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todosection;
