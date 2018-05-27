import React, { Component } from 'react';
// import './App.css';
import Input from './Inputs.js';
import Results from './Results.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to My React Site</h1>
        </header>
        <div className="Main-wrapper">
          <Input />
          <Results search="Lilard"/>
         </div>
      </div>
    );
  }
}

export default App;
