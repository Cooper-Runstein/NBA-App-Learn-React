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

      selectedStats : [
        {name: 'APG', checked: true, leadPlayer: "", score: ""},
        {name: 'PPG', checked: true, leadPlayer: "", score: ""},
        {name: 'RPG', checked: true, leadPlayer: "", score: ""}, 
        {name: 'Assists', checked: false, leadPlayer: "", score: ""},
        {name: 'Points', checked: false, leadPlayer: "", score: ""}, 
        {name: 'Blocks', checked: false, leadPlayer: "", score: ""},
        {name: 'Rebounds', checked: false, leadPlayer: "", score: ""},
        {name: 'ThreePct', checked: false,leadPlayer: "", score: ""}
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
    if (req){
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
    })
   this.updateLeaderBoard()
  }

  //Stats
  updateLeaderBoard = ()=>{
    this.state.selectedStats.map((stat, index)=>{
      let curStat = stat.name; 
      this.state.players.map((player)=>{
        if ((parseFloat(player.stats[curStat]) > parseFloat(stat.score)) || stat.score === ""){
          const updatedStats = this.state.selectedStats.slice(0)
          updatedStats[index] = {
            ...this.state.selectedStats[index],
            leadPlayer: player.name,
            score: player.stats[curStat]
          }
          this.setState({
              selectedStats: updatedStats})
        }})
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
          updatePendingPlayer = {this.updatePendingPlayer}
          addPendingPlayer = {this.addPendingPlayer}
          pendingPlayer = {this.state.pendingPlayer}
          selectedStats = {this.state.selectedStats}
          toggleCheckedAt = {this.toggleCheckedAt}
          />
        <div className='Results-box'>
          <Results 
            players = {this.state.players}
            removePlayer = {this.removePlayer}
            selectedStats = {this.state.selectedStats}
            addPlayerStats = {this.addPlayerStats}/>
        </div>
        <Comparison 
          stats= {this.state.selectedStats}
        />
      </div>
    );
  }
}

export default App;