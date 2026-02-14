import React from 'react';

function TaskItem({ task, onToggle }) {  
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className={`task_item ${task.completed ? 'completed' : ''}`}>
      <div className="task_content">
        <div className="task_checkbox">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggle(task.id)}  
          />
        </div>
        
        <div className="task_details">
          <h4 className="task_title">{task.title}</h4>
          {task.description && (
            <p className="task_description">{task.description}</p>
          )}
          <small className="task_date">
            {formatDate(task.createdAt)}
          </small>
        </div>
      </div>
    </div>
  );
}

export default TaskItem;