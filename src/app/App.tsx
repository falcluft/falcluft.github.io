import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MyButton } from '../stories/MyButton';
import { MyModalDialog } from '../stories/MyModalDialog';

function App() {
  return (
    <div className="App">
        <MyModalDialog text="Hello! I am a moal dialog!" />
        <p>
            Тест
        </p>
        <MyButton label="Hello 2" />
    </div>
  );
}

export default App;
