import React, { Component } from 'react';
import './App.css';
import Input from './Inputs.js';
import Results from './Results.js';

class App extends Component {
  state = {
    players : [
      {
        name : 'Lillard',
        team : 'Trail-Blazers',
        city : 'Portland',
        position : 'PG',
        stats : {
          season : '17-18',
          ppg : 26.9,
          apg : 6.6,
          rpg : 4.5	
        }
      },
      {
        name : 'James',
        team : 'Cavaliers',
        city : 'Cleveland',
        position : 'SF',
        stats : {
          season : '17-18',
          ppg : 27.5,
          apg : 9.1,
          rpg : 8.6
        }
      },
    ]
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to My React Site</h1>
        </header>
        <div className="Main-wrapper">
          <Input />
          <Results players = {this.state.players}/>
         </div>
      </div>
    );
  }
}

export default App;
