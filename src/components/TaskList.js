import React from 'react';
import TaskItem from './TaskItem';
import EmptyState from './EmptyState';

function TaskList({ tasks, onToggleTask, onDeleteTask }) {
  if (tasks.length === 0) {
    return (
      <EmptyState
        message="No tasks to show"
        detail="Add a new task or change the filter"
      />
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