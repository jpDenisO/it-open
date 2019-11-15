import React from 'react';
import styles from './App.module.css';
import List from './List';

const App: React.FC = () => {
  return (
    <div className={styles.root}>
      <header className={styles.header}>Best ToDo app ever</header>
      <main>
        <List></List>
      </main>
    </div>
  );
};

export default App;
