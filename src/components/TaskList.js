import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, onToggleTask, onDeleteTask }) { 
  // Show friendly message when no tasks match current filter
  if (tasks.length === 0) {
    return (
      <div className="empty_state">
        <p>No tasks to show</p>
        <small>Add a new task or change the filter</small>
      </div>
    );
  }

  return (
    <div className="task_list">
      {tasks.map(task => (
        <TaskItem 
          key={task.id} // Unique key helps React optimize re-renders
          task={task} 
          onToggle={onToggleTask}
          onDelete={onDeleteTask}  
        />
      ))}
    </div>
  );
}

export default TaskList;