import React from 'react';
import PropTypes from 'prop-types';

const Player = props => 
    <div>
         <ul>
            <li>{props.player.name} </li>
            <li>{props.player.city} - {props.player.team} </li>
            <li> {props.player.position} </li>
        </ul>
    </div>
    

Player.propTypes = {
    player : PropTypes.object.isRequired
}

export default Player;