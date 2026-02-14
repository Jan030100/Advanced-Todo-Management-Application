import React, { useState } from 'react';  

function TaskItem({ task, onToggle, onDelete }) {  
  // Control confirmation modal visibility - prevents accidental deletions
  const [showModal, setShowModal] = useState(false); 

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

  const handleDeleteClick = () => {
    setShowModal(true); // Show confirmation first, don't delete immediately
  };

  const handleConfirmDelete = () => {
    onDelete(task.id); // Actual delete only happens after user confirms
    setShowModal(false);
  };

  const handleCancelDelete = () => {
    setShowModal(false); // Just close modal, keep the task
  };

  return (
    <>
      <div className={`task_item ${task.completed ? 'completed' : ''}`}>
        <div className="task_content">
          <div className="task_checkbox">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggle(task.id)} // Toggle completion status
            />
          </div>
          
          <div className="task_details">
            <h4 className="task_title">{task.title}</h4>
            {task.description && ( // Only show description if it exists
              <p className="task_description">{task.description}</p>
            )}
            <small className="task_date">
              {formatDate(task.createdAt)}
            </small>
          </div>

          <button 
            className="delete_btn"
            onClick={handleDeleteClick}
            aria-label="Delete task"
          >
            DELETE
          </button>
        </div>
      </div>

      {/* Modal overlay - conditionally rendered only when needed */}
      {showModal && (
        <div className="modal_overlay">
          <div className="modal">
            <h3>Confirm Deletion</h3>
            <p>
              Are you sure you want to delete: <strong>"{task.title}"</strong>?
              <br />
              This action cannot be undone. {/* Warn user this is permanent */}
            </p>
            <div className="modal_actions">
              <button className="modal_btn cancel" onClick={handleCancelDelete}>
                Cancel
              </button>
              <button className="modal_btn confirm" onClick={handleConfirmDelete}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default TaskItem;