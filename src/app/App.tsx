import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MyButton } from '../stories/MyButton';
import { MyModalDialog } from '../stories/MyModalDialog';

function App() {
  return (
      <div>
       
        <div className="App1">
            <p>
                Тест
            </p>
            <MyButton label="Hello 2" />
        </div>
         <MyModalDialog text="Hello! I am a moal dialog!" />
    </div>
  );
}

export default App;
