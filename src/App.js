import React, { Component } from 'react';
import './App.css';
import Input from './Inputs.js';
import Results from './Results.js';
import request from './request.js'

class App extends Component {
  state = {
    pendingPlayer: "",
    players : [
      
    ]
  }

  updatePendingPlayer = (e)=>{
    e.preventDefault();
    this.setState({
      pendingPlayer: e.target.value
    })
  }

  addPendingPlayer = (e)=> {
    e.preventDefault();
    request(this.state.pendingPlayer).then(
      data => {
        this.setState(
          {
            players: [data, ...this.state.players],
            pendingPlayer : ""
          }
        )
      } )
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">NBA Stat Comparison App</h1>
        </header>
        <div className="Main-wrapper">
          <Input 
            updatePendingPlayer= {this.updatePendingPlayer}
            addPendingPlayer= {this.addPendingPlayer}
            pendingPlayer= {this.state.pendingPlayer}/>
          <Results 
            players = {this.state.players}/>
         </div>
      </div>
    );
  }
}

export default App;