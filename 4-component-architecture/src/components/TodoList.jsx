import TodoItem from './TodoItem';

function TodoList({ tasks, onRemove, onToggle }) {
    return (
        <div>
        {tasks.length === 0 ? (
            <p>No tasks yet</p>
        ) : (
            tasks.map(task => (
            <TodoItem
                key={task.id}
                task={task}
                onRemove={onRemove}
                onToggle={onToggle}
            />
            ))
        )}
        </div>
    );
}

export default TodoList;