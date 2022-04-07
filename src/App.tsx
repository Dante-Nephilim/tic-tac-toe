import React from 'react';
import Grid from './components/Grid';
import Box from './components/box';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div><h1>Tic-Tac-Toe</h1></div>
      </header>
      <div className="App-body">
        <Grid />


      </div>
    </div>
  );
}

export default App;
