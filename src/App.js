import React, { Component } from 'react';
import './App.css';
import Input from './Input.js';
import Results from './Results.js';
import request from './request.js';
import Comparison from './Comparison.js';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pendingPlayer: "",
      players: [
        
      ],
      leaderBoard: {
        PPG: ["No Player Selected", ""],
        APG: ["No Player Selected", ""],
        RPG: ["No Player Selected", ""]
      },
      selectedStats : [
        {name: 'APG', checked : true},
        {name: 'PPG', checked: true},
        {name: 'RPG', checked: true}, 
        {name: 'Assists', checked: false},
        {name: 'Points', checked: false}, 
        {name: 'Blocks', checked: false},
        {name: 'Rebounds', checked: false},
        {name: 'ThreePct', checked: false}
      ]
    }
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

  addPlayerStats = ()=>{
    let html = "";
    this.state.selectedStats.map(stat=>{
      if(!!stat.checked)
        html += <li> stat.name </li>
    })
    return html
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
    let PPG = ['No Player Selected',  ""];
    let APG = ['No Player Selected', ""];
    let RPG = ['No Player Selected', ""];

    this.state.players.map((e, i)=>{
      if(parseFloat(e.stats.PPG) > PPG[1]){
        PPG = [e.name, parseFloat(e.stats.PPG)]
      }
      if(parseFloat(e.stats.RPG) > RPG[1]){
        RPG = [e.name, parseFloat(e.stats.RPG)]
      }
      if(parseFloat(e.stats.APG) > APG[1]){
        APG = [e.name, parseFloat(e.stats.APG)]
      }
    })

    this.setState({
      leaderBoard: {
        PPG: PPG,
        APG: APG,
        RPG: RPG

      }
    })
  }

  toggleCheckedAt = targetIndex => 
    this.setState({
      selectedStats: this.state.selectedStats.map((stat, index) => {
        if (index === targetIndex) {
            return {
                ...stat,
                ['checked']: !stat['checked']
            };
        }
        return stat;
      })
     
    });

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
          toggleCheckedAt = {this.toggleCheckedAt}
          />
        <div className='Results-box'>
          <Results 
            players = {this.state.players}
            removePlayer = {this.removePlayer}
            updateLeaderBoard= {this.updateLeaderBoard}
            selectedStats={this.state.selectedStats}
            addPlayerStats ={this.addPlayerStats}/>
        </div>
        <Comparison 
          leaderBoard={this.state.leaderBoard}
        />
      </div>
    );
  }
}

export default App;