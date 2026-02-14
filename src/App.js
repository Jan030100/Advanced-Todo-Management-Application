import React, { useCallback, useMemo, useState } from 'react'; 
import useLocalStorage from './hooks/useLocalStorage';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import FilterButton from './components/FilterButton';
import './styles/App.css';

function App() {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [filter, setFilter] = useState('all');

  const handleAddTask = (taskData) => {
    const newTask = {
      id: Date.now().toString(),
      ...taskData,
      completed: false,
      createdAt: new Date().toISOString(),
    };

    setTasks([newTask, ...tasks]);
  };

  const handleToggleTask = useCallback((taskId) => {
    setTasks(prevTasks => 
      prevTasks.map(task =>
        task.id === taskId
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }, [setTasks]);

  const handleDeleteTask = useCallback((taskId) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  }, [setTasks]);

  const handleFilterChange = useCallback((newFilter) => {
    setFilter(newFilter);
  }, []);

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