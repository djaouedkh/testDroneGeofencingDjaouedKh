import React from 'react';
import styles from './taskItem.module.css';
import taskSettings from '../../../settings/task';

const TaskItem = ({ task, onDeleteTask, onToggleTaskCompletion }) => {
  const { id, name, completed } = task;

  const handleDelete = () => {
    onDeleteTask(id);
  };

  const handleToggleCompletion = () => {
    onToggleTaskCompletion(id);
  };

  return (
    <div className={`${styles.taskItem} ${completed ? styles.completed : ''}`}>
      <span>{name}</span>
      <div>
        <button
          onClick={handleToggleCompletion}
          className={`${styles.toggleButton} ${completed ? styles.completedButton : ''}`}
        >
          {completed ? taskSettings.taskNotCompleted : taskSettings.taskCompleted}
        </button>
        <button onClick={handleDelete} className={styles.deleteButton}>Supprimer</button>
      </div>
    </div>
  );
};

export default TaskItem;
