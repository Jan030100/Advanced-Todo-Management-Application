import React, { useState } from 'react';

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!title.trim()) {
      setError('Please add task name');
      return;
    }

    onAddTask({
      title: title.trim(),
      description: description.trim(),
    });

    setTitle('');
    setDescription('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          placeholder="task name"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            if (error) setError('');
          }}
        />
      </div>
      
      <div>
        <textarea
          placeholder="task description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      {error && <div style={{ color: 'red' }}>{error}</div>}

      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;