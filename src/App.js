import React, { useCallback, useMemo, useState } from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import FilterButtons from './components/FilterButton';
import TaskStats from './components/TaskStats';
import './styles/App.css';


function App() {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [filter, setFilter] = useState('all');

  const handleAddTask = useCallback((taskData) => {
    const newTask = {
      id: Date.now().toString(),
      title: taskData.title,
      description: taskData.description,
      completed: false,
      createdAt: new Date().toISOString(),
    };

    setTasks((prevTasks) => [newTask, ...prevTasks]);
  }, [setTasks]);

  const handleToggleTask = useCallback((taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  }, [setTasks]);

  const handleDeleteTask = useCallback((taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  }, [setTasks]);

  const handleFilterChange = useCallback((selectedFilter) => {
    setFilter(selectedFilter);
  }, []);

  const filteredTasks = useMemo(() => {
    switch (filter) {
      case 'completed':
        return tasks.filter((task) => task.completed);
      case 'uncompleted':
        return tasks.filter((task) => !task.completed);
      default:
        return tasks;
    }
  }, [tasks, filter]);

  const stats = useMemo(() => {
    const total = tasks.length;
    const completed = tasks.filter((task) => task.completed).length;
    return {
      total,
      completed,
      uncompleted: total - completed,
    };
  }, [tasks]);

  const taskHeading = filter === 'all'
    ? 'All tasks'
    : filter === 'completed'
      ? 'Completed tasks'
      : 'Pending tasks';

  return (
    <div className='App'>
      <header className='app_header'>
        <p className='eyebrow'>Task management reimagined</p>
        <h1>Advanced ToDo Dashboard</h1>
        <p className='app_intro'>Plan your day, stay focused, and keep progress visible with a cleaner task workspace.</p>
      </header>

      <section className='dashboard_top'>
        <div className='panel panel_form'>
          <div className='panel_header'>
            <h2>Add a new task</h2>
            <p>Capture what matters and keep the list lean.</p>
          </div>
          <TaskForm onAddTask={handleAddTask} />
        </div>

        <div className='panel panel_stats'>
          <div className='panel_header'>
            <h2>Quick overview</h2>
            <p>Track your task load and completed progress at a glance.</p>
          </div>
          <TaskStats
            total={stats.total}
            completed={stats.completed}
            uncompleted={stats.uncompleted}
          />
        </div>
      </section>

      <section className='tasks_section'>
        <div className='tasks_header'>
          <div>
            <p className='tasks_subtitle'>Current view</p>
            <h2 className='tasks_title'>
              {taskHeading} <span className='task_count'>({filteredTasks.length})</span>
            </h2>
          </div>

          <FilterButtons
            currentFilter={filter}
            onFilterChange={handleFilterChange}
          />
        </div>

        <TaskList
          tasks={filteredTasks}
          onToggleTask={handleToggleTask}
          onDeleteTask={handleDeleteTask}
        />
      </section>
    </div>
  );
}

export default App;