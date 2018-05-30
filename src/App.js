import React, { Component } from 'react';
import './App.css';
import Input from './Input.js';
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

  validateEntry = (name) => {
      let punc = [",", "'", "`", "." ];
      name = name.replace(" ", "-");
      name = name.toLowerCase();
      punc.map(x=> name.replace(x, ""))
      if (name !== undefined && name.length > 0){
      return name}return false;
    }

  addPendingPlayer = (e)=> {
    e.preventDefault();
    let req = this.validateEntry(this.state.pendingPlayer);
    if (!!req){
    request(req).then(
      data => {
        this.setState(
          { players: data.concat([...this.state.players]),
            pendingPlayer : ""})
      })}else{
        console.log("X");
      }
  }

  removePlayer = index =>{
    this.setState({
      players: [
        ...this.state.players.slice(0, index),
        ...this.state.players.slice(index + 1)
      ]
    });
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
            players = {this.state.players}
            removePlayer = {this.removePlayer}/>
         </div>
      </div>
    );
  }
}

export default App;