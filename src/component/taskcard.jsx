

function TaskCard({ task, onEdit, onDelete }) {
  return (
    <div className="task-card">

      <h3>{task.title}</h3>

      <p>{task.description}</p>

      <span className="category">
        {task.category}
      </span>

      <p className={`status ${task.status}`}>
        Status: {task.status}
      </p>

      <p>📅 {task.date}</p>

      <div className="actions">

        <button
          type="button"
          onClick={() => onEdit(task)}
        >
          ✏️ Edit
        </button>

        <button
          type="button"
          className="delete"
          onClick={() => onDelete(task.id)}
        >
          🗑️ Delete
        </button>

      </div>
    </div>
  );
}

export default TaskCard;
