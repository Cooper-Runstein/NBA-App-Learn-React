import React from 'react';
import PropTypes from 'prop-types';
import Player from './player.js';

const Results = props => 
    <div className="Results-wrapper">
        {props.players.map((element, index)=>{
            return <Player
                key = {index}
                player= {element}
                handleRemove= {()=> props.removePlayer(index)}
                selectedStats ={props.selectedStats}
                addPlayerStats = {props.addPlayerStats}/>
        }
        )}
        </div>
    

Results.propTypes = {
    players : PropTypes.array.isRequired,
    removePlayer : PropTypes.func.isRequired,
    selectedStats : PropTypes.array.isRequired
}

export default Results;