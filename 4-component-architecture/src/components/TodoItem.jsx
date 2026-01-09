import styles from '../styles/TodoItem.module.css';

function TodoItem({ task, onRemove, onToggle }) {
    return (
        <div className={styles.todo}>
            <div
                className={task.completed ? styles.completed : ''}
                onClick={() => onToggle(task.id)}
                style={{ cursor: 'pointer' }}
            >
                {task.text}
            </div>
            <button onClick={() => onRemove(task.id)}>Remove</button>
        </div>
    );
}

export default TodoItem;