import React, { Component } from 'react';
import './App.css';
import Input from './Input.js';
import Results from './Results.js';
import request from './request.js';
import Comparison from './Comparison.js';


class App extends Component {
  state = {
    pendingPlayer: "",
    players : [
      
    ],
    leaderBoard: {
      ppg : ["No Player Selected", ""],
      apg : ["No Player Selected", ""],
      rpg : ["No Player Selected", ""]
    },
    selectedStats : [
      {name : 'APG', checked : true},
      {name: 'PPG', checked: true},
      {name: 'RPG', checked: true}, 
      {name: 'Assists', checked: false},
      {name: 'Points', checked: false}, 
      {name: 'Blocks', checked: false},
      {name: 'Rebounds', checked: false},
      {name: '3pct', checked: false}
    ]
  }

  //Player Entry
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
              this.updateLeaderBoard()
          }
            ).catch(()=> alert(`That name did not get a response. 
            Try only a last name if the problem presists.
            Don't Enter Nicknames, i.e. use Stephen, not Steph Curry `))
      }else{
        alert("Invalid Name Entry, Please Try Again");
      }
  }
  
  //Player Manipulation
  removePlayer = index =>{
    this.setState({
      players: [
        ...this.state.players.slice(0, index),
        ...this.state.players.slice(index + 1)
      ]
    }, this.updateLeaderBoard)
    
  }

  //Stats
  updateLeaderBoard = ()=>{
    let ppg = ['No Player Selected',  ""];
    let apg = ['No Player Selected', ""];
    let rpg = ['No Player Selected', ""];

    this.state.players.map((e, i)=>{
      if(parseFloat(e.stats.ppg) > ppg[1]){
        ppg = [e.name, parseFloat(e.stats.ppg)]
      }
      if(parseFloat(e.stats.rpg) > rpg[1]){
        rpg = [e.name, parseFloat(e.stats.rpg)]
      }
      if(parseFloat(e.stats.apg) > apg[1]){
        apg = [e.name, parseFloat(e.stats.apg)]
      }
    })

    this.setState({
      leaderBoard: {
        ppg: ppg,
        apg : apg,
        rpg : rpg

      }
    })
  }

  updateSelectedStats = index => {
    this.setState({
      selectedStats: [
        ...this.selectedStats,
        this.selectedStats[index].checked = !this.selectedStats[index].checked
      ]

    })
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">NBA Stat Comparison App</h1>
        </header>
        <Input 
          updatePendingPlayer= {this.updatePendingPlayer}
          addPendingPlayer= {this.addPendingPlayer}
          pendingPlayer= {this.state.pendingPlayer}
          selectedStats= {this.state.selectedStats}
          updateSelectedStats = {this.updateSelectedStats}
          />
        <div className='Results-box'>
          <Results 
            players = {this.state.players}
            removePlayer = {this.removePlayer}
            updateLeaderBoard= {this.updateLeaderBoard}/>
        </div>
        <Comparison 
          leaderBoard={this.state.leaderBoard}
        />
      </div>
    );
  }
}

export default App;