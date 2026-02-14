import React, { useCallback } from 'react'; 
import useLocalStorage from './hooks/useLocalStorage';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './styles/App.css';

function App() {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  
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
  }, []);  

  return (
    <div className='App'>
      <h1> ToDo Management Tool</h1>
      
      <TaskForm onAddTask={handleAddTask} />
      
      <div className='tasks_container'>
        <h3>Current Tasks ({tasks.length})</h3>
        <TaskList 
          tasks={tasks} 
          onToggleTask={handleToggleTask}  
        />
      </div>
    </div>
  );
}

export default App;