import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MyButton } from '../stories/MyButton';
import { MyModalDialog } from '../stories/MyModalDialog';

function App() {
  return (
        <div className="App">
            <header className="App-header">
                <img src={"logo"} className="App-logo" alt="logo" />
                <p>
                    Любой текст
                </p>
                <MyButton label="Click me" />
                <MyModalDialog text="Hello! I am a modal dialog!" />
            </header>
        </div>
  );
}

export default App;
