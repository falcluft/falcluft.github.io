import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MyButton } from '../stories/MyButton';
import { MyModalDialog } from '../stories/MyModalDialog';

function App() {
  return (
    <div className="App">
     <MyModalDialog text="Hello! I am a moal dialog!" />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Тест
        </p>
         <MyButton label="Hello 2" />
        
      </header>
    </div>
  );
}

export default App;
