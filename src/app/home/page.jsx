import React from "react";
import styles from "./page.module.css";
import TaskList from '../../components/Task/TaskList/TaskList'

const Home = () => {
  return (
    <div className={styles.container}>
      <TaskList/>
    </div>
  );
};

export default Home;