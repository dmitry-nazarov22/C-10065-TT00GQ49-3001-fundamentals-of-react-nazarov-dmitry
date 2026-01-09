import { useState } from "react";

function AddTask({ onAdd }) {
    const [task, setTask] = useState('');

    const handleAdd = () => {
        if (task.trim() !== '') {
        onAdd(task.trim());
        setTask('');
        }
    };

    return (
        <div style={{ marginBottom: '10px' }}>
        <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter task..."
        />
        <button onClick={handleAdd} style={{ marginLeft: '10px' }}>Add</button>
        </div>
    );
    }

export default AddTask;