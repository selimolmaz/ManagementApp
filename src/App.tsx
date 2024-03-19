import type { Component } from 'solid-js';

import styles from './App.module.css';
import LoginPage from './pages/loginPage/LoginPage';

import { Route, Router } from '@solidjs/router';
import HomePage from './pages/homePage/HomePage';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <div>
        <Router>
          <Route path="/" component={LoginPage} />
          <Route path="/home" component={HomePage} />
        </Router>
      </div>
    </div>
  );
};

export default App;
