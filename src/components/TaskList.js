import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, onToggleTask, onDeleteTask }) { 
  if (tasks.length === 0) {
    return (
      <div className="empty_state">
        <p>No tasks yet. Add your first task!</p>
      </div>
    );
  }

  return (
    <div className="task_list">
      {tasks.map(task => (
        <TaskItem 
          key={task.id} 
          task={task} 
          onToggle={onToggleTask}
          onDelete={onDeleteTask}  
        />
      ))}
    </div>
  );
}

export default TaskList;