
import { useState } from 'react';

function TaskForm({ initialTask, onSave, onCancel }) {

  const [title, setTitle] = useState(
    initialTask?.title || ''
  );

  const [description, setDescription] = useState(
    initialTask?.description || ''
  );

  const [category, setCategory] = useState(
    initialTask?.category || 'Reading'
  );

  const [date, setDate] = useState(
    initialTask?.date || ''
  );

  const [status, setStatus] = useState(
    initialTask?.status || 'Pending'
  );

  function handleSubmit(event) {
    event.preventDefault();

    const task = {
      title,
      description,
      category,
      date,
      status
    };

    onSave(task);
  }

  return (
    <div className="modal">
      <div className="modal-content">

        <h2>
          {initialTask ? 'Edit Task' : 'Add New Task'}
        </h2>

        <form onSubmit={handleSubmit}>

          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />

          <label>Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>Reading</option>
            <option>Writing</option>
            <option>English</option>
            <option>Practice</option>
          </select>

          <label>Due Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />

          <label>Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option>Pending</option>
            <option>Completed</option>
          </select>

          <div className="buttons">

            <button
              type="button"
              onClick={onCancel}
            >
              Cancel
            </button>

            <button type="submit">
              Save Task
            </button>

          </div>

        </form>
      </div>
    </div>
  );
}

export default TaskForm;
