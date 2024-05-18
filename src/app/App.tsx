import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyButton from './../stories/MyButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Тест
        </p>
      </header>
      <MyButton text="Hello"/>
    </div>
  );
}

export default App;
