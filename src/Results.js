import React from 'react';
import PropTypes from 'prop-types';
import Player from './player.js';

const Results = props => 
    <div className="Results-wrapper">
        {props.players.map((element, index)=>
            <Player
                key = {index}
                player= {element}
                handleRemove= {()=> props.removePlayer(index)}
                />
        )}
        </div>
    

Results.propTypes = {
    players : PropTypes.array.isRequired,
    removePlayer : PropTypes.func.isRequired
}

export default Results;