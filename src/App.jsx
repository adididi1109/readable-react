
import { useState, useEffect } from 'react';
import './App.css';

import Navbar from './component/navbar';
import Header from './component/header';
import TaskList from './component/tasklist';
import TaskForm from './component/taskform';

const initialTasks = [
  {
    id: 1,
    title: 'Reading Practice',
    description: 'Read one chapter of a book.',
    category: 'Reading',
    status: 'Pending',
    date: '2026-11-10'
  },
  {
    id: 2,
    title: 'English Writing',
    description: 'Write five sentences in English.',
    category: 'Writing',
    status: 'Completed',
    date: '2026-11-12'
  },
  {
    id: 3,
    title: 'Vocabulary Practice',
    description: 'Learn ten new English words.',
    category: 'English',
    status: 'Pending',
    date: '2026-11-15'
  }
];

function App() {

  // LOAD TASKS
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');

    return savedTasks
      ? JSON.parse(savedTasks)
      : initialTasks;
  });

  // SEARCH AND FILTER
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');

  // FORM
  const [showForm, setShowForm] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  // SAVE TASKS TO LOCAL STORAGE
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // CREATE AND UPDATE
  function saveTask(taskData) {

    if (editingTask) {

      setTasks(tasks.map(task =>
        task.id === editingTask.id
          ? { ...taskData, id: editingTask.id }
          : task
      ));

    } else {

      const newTask = {
        ...taskData,
        id: Date.now()
      };

      setTasks([...tasks, newTask]);
    }

    setShowForm(false);
    setEditingTask(null);
  }

  // EDIT
  function editTask(task) {
    setEditingTask(task);
    setShowForm(true);
  }

  // DELETE
  function deleteTask(id) {

    const confirmed = window.confirm(
      'Are you sure you want to delete this task?'
    );

    if (confirmed) {
      setTasks(tasks.filter(task => task.id !== id));
    }
  }

  // SEARCH AND FILTER
  const filteredTasks = tasks.filter(task => {

    const matchesSearch =
      task.title.toLowerCase().includes(search.toLowerCase()) ||
      task.description.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      filter === 'All' || task.status === filter;

    return matchesSearch && matchesStatus;
  });

  return (
    <>
      <Navbar />

      <div className="container">

        <Header
          onAddTask={() => {
            setEditingTask(null);
            setShowForm(true);
          }}
        />

        <div className="filters">

          <input
            type="text"
            placeholder="Search tasks..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
          </select>

        </div>

        <TaskList
          tasks={filteredTasks}
          onEdit={editTask}
          onDelete={deleteTask}
        />

      </div>

      {showForm && (
        <TaskForm
          key={editingTask ? editingTask.id : 'new'}
          initialTask={editingTask}
          onSave={saveTask}
          onCancel={() => {
            setShowForm(false);
            setEditingTask(null);
          }}
        />
      )}

      <footer>
        <h3>ReadAble</h3>
        <p>
          Inclusive learning with the help of technology and AI.
        </p>
        <p>© 2026 ReadAble</p>
      </footer>
    </>
  );
}

export default App;

