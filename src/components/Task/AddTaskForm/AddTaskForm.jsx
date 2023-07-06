import React, { useState } from 'react';
import styles from './addTaskForm.module.css'
import taskSettings from '../../../settings/task';

const AddTaskForm = ({ onAddTask }) => {
    
    const [taskName, setTaskName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (taskName.trim() === '') {
            return;
        }

        const newTask = {
            id: Date.now(),
            name: taskName,
            completed: false,
        };

        onAddTask(newTask);

        setTaskName('');
    }

  return (
    <form className={styles.addTaskForm} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder={taskSettings.enterYourTask}
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default AddTaskForm;