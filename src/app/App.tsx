import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MyButton } from '../stories/MyButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Тест
        </p>
         <MyButton label="Hello"/>
      </header>
    </div>
  );
}

export default App;
