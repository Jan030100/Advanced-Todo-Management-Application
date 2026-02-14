import React from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import TaskForm from './components/TaskForm';

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

  return (
    <div>
      <h1>ToDo Mangment Tool</h1>
        <TaskForm onAddTask={handleAddTask} />
        <div>
        <h3>Current Tasks</h3>
        <pre>{JSON.stringify(tasks, null, 2)}</pre>
      </div>
    </div>
  );
}

export default App;