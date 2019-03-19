import React, { Component } from 'react';
import MemoryGame from './components/MemoryGame';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <MemoryGame />
            </div>
        );
    }
}

export default App;
