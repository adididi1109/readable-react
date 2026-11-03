
function Header({ onAddTask }) {
  return (
    <div className="header">
      <div>
        <h1>📖 ReadAble</h1>
        <h2>Learning Tasks</h2>
        <p>
          Manage your dyslexia-friendly learning tasks.
        </p>
      </div>

      <button type="button" onClick={onAddTask}>
        + Add Task
      </button>
    </div>
  );
}

export default Header;
