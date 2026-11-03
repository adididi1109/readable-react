
import TaskCard from './taskcard';

function TaskList({ tasks, onEdit, onDelete }) {
  return (
    <div className="task-list">

      {tasks.length === 0 ? (
        <p>No tasks found.</p>
      ) : (
        tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))
      )}

    </div>
  );
}

export default TaskList;
