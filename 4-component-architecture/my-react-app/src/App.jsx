import './App.css'
import { useState } from 'react';
import AddTask from './components/AddTask';
import TodoList from './components/TodoList';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    const newTask = { id: Date.now(), text, completed: false };
    setTasks(prev => [...prev, newTask]);
  };

  const removeTask = (id) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div style={{ padding: '20px'}}>
      <h1>To-Do List</h1>
      <AddTask onAdd={addTask} />
      <TodoList tasks={tasks} onRemove={removeTask} onToggle={toggleTask} />
    </div>
  );
}

export default App;
