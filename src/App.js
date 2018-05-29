import React, { Component } from 'react';
import './App.css';
import Input from './Inputs.js';
import Results from './Results.js';

class App extends Component {
  state = {
    pendingPlayer: "",
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

  updatePendingPlayer = (e)=>{
    this.setState({
      pendingPlayer: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">NBA Stat Comparison App</h1>
        </header>
        <div className="Main-wrapper">
          <form>
            <input
              placeholder="Enter Player Name"
              value={this.state.pendingPlayer}
              onChange={this.updatePendingPlayer}/>
            <button>Add Player</button>
          </form>
          <Results players = {this.state.players}/>
         </div>
      </div>
    );
  }
}

export default App;
