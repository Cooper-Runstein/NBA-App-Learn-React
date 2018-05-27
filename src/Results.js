import React from 'react';
import PropTypes from 'prop-types';
import Player from './player.js';

const Results = props => 
    <div>
        {props.players.map((element, index)=>
            <Player
                key = {index}
                player={element}/>
        )}
    </div>
    
Results.propTypes = {
    players : PropTypes.array.isRequired
}

export default Results;