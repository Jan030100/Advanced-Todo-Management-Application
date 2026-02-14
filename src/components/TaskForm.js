import React, { useState } from 'react';

function TaskForm({ onAddTask }) {
  // Track form inputs locally before submitting to parent
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  // Show validation feedback without disrupting parent state
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    
    // Validate before sending to parent - title is required by business logic
    if (!title.trim()) {
      setError('Please add task name');
      return; // Stop submission if validation fails
    }

    // Send clean data to parent (trimmed whitespace)
    onAddTask({
      title: title.trim(),
      description: description.trim(),
    });

    // Clear form after successful submission for better UX
    setTitle('');
    setDescription('');
    setError(''); // Clear any previous errors
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
            if (error) setError(''); // Clear error as soon as user types
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