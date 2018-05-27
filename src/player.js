import React from 'react';
import PropTypes from 'prop-types';

const Player = props => 
    <div> {props.player.name} </div>
    

Player.propTypes = {
    player : PropTypes.object.isRequired
}

export default Player;