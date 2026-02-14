import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks }) {
  if (tasks.length === 0) {
    return (
      <div className="empty_state">
        <p>Add your first task</p>
      </div>
    );
  }

  return (
    <div className="task_list">
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;