import React from 'react';
import logo from './logo.svg';
import './App.css';
import TaskManager from './components/TaskManager';

function App() {
  return (
    <div className="App">
	<header className="App-header">
		<img src={logo} className="App-logo" alt="logo" />
	</header>
	<div className="App-body">
	  <TaskManager/>
	</div>
    </div>
  );
}

export default App;
