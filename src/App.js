import React, { useCallback, useMemo, useState } from 'react'; 
import useLocalStorage from './hooks/useLocalStorage';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import FilterButton from './components/FilterButton';
import './styles/App.css';

function App() {
  // Persist tasks across browser sessions
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  // Track which filter is currently active
  const [filter, setFilter] = useState('all');

  const handleAddTask = (taskData) => {
    // Use timestamp as ID to ensure uniqueness without backend
    const newTask = {
      id: Date.now().toString(),
      ...taskData,
      completed: false,
      createdAt: new Date().toISOString(),
    };

    // Place new tasks at the top for better UX
    setTasks([newTask, ...tasks]);
  };

  // Prevent recreating function on every render since it's passed to children
  const handleToggleTask = useCallback((taskId) => {
    // Use functional update to avoid stale closure issues
    setTasks(prevTasks => 
      prevTasks.map(task =>
        task.id === taskId
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }, [setTasks]);

  // Same optimization for delete to prevent unnecessary re-renders
  const handleDeleteTask = useCallback((taskId) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  }, [setTasks]);

  // Filter change handler doesn't need dependencies
  const handleFilterChange = useCallback((newFilter) => {
    setFilter(newFilter);
  }, []);

  // Only filter tasks when tasks or filter actually change
  const filteredTasks = useMemo(() => {
    console.log('Filtering tasks...');
    switch (filter) {
      case 'completed':
        return tasks.filter(task => task.completed);
      case 'uncompleted':
        return tasks.filter(task => !task.completed);
      default:
        return tasks;
    }
  }, [tasks, filter]); 

  // Avoid recalculating stats on every render
  const stats = useMemo(() => {
    const total = tasks.length;
    const completed = tasks.filter(t => t.completed).length;
    const uncompleted = total - completed;
    return { total, completed, uncompleted };
  }, [tasks]);

  return (
    <div className='App'>
      <h1>ToDo Management Tool</h1>
      
      <TaskForm onAddTask={handleAddTask} />
      
      <div className="stats_container">
        <span>Total: {stats.total}</span>
        <span> Completed: {stats.completed}</span>
        <span> Uncompleted: {stats.uncompleted}</span>
      </div>

      <FilterButton
        currentFilter={filter} 
        onFilterChange={handleFilterChange} 
      />
      
      <div className='tasks_container'>
        <h3>
          {/* Show appropriate heading based on current filter */}
          {filter === 'all' && 'All Tasks'}
          {filter === 'completed' && 'Completed Tasks'}
          {filter === 'uncompleted' && 'Uncompleted Tasks'}
          ({filteredTasks.length})
        </h3>
        <TaskList 
          tasks={filteredTasks}  
          onToggleTask={handleToggleTask}
          onDeleteTask={handleDeleteTask}
        />
      </div>
    </div>
  );
}

export default App;