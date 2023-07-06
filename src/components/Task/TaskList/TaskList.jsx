import React, { useState } from 'react';
import TaskItem from '../TaskItem/TaskItem';
import AddTaskForm from '../AddTaskForm/AddTaskForm';
import styles from './taskList.module.css';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const toggleTaskCompletion = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Liste des tâches</h1>
      <div className={styles.taskList}>
        <ul className={styles.taskItems}>
          {tasks.map((task) => (
            <li>
              <TaskItem
                key={task.id}
                task={task}
                onDeleteTask={deleteTask}
                onToggleTaskCompletion={toggleTaskCompletion}
              />
            </li>
          ))}
        </ul>
        <AddTaskForm onAddTask={addTask} />
      </div>
    </div>
  );
};

export default TaskList;