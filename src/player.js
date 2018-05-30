import React from 'react';
import PropTypes from 'prop-types';

const Player = props => 
    <div className="Player-wrapper">
         <ul>
            <li>{props.player.name} </li>
            <li>{props.player.city} - {props.player.team} </li>
            <li> {props.player.position} </li>
            <li>Points Per Game: {props.player.stats.ppg} </li>
            <li>Assists Per Game: {props.player.stats.apg} </li>
            <li>Rebounds Per Game: {props.player.stats.rpg} </li>
        </ul>
        <button
            onClick={props.handleRemove}
            > Remove Player </button>
    </div>
    


yyyyyyy

Player.propTypes = {
    player : PropTypes.object.isRequired,
    handleRemove : PropTypes.func.isRequired
}

export default Player;