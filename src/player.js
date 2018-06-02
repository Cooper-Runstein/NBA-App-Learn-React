import React from 'react';
import PropTypes from 'prop-types';
// import PlayerStats from './PlayerStats.js'

const Player = props => 
    <div className="Player-wrapper">
         <ul>
            <li className="Title">{props.player.name} #{props.player.jersey}</li>
            <li>{props.player.city} - {props.player.team} </li>
            <li> {props.player.position} </li>
            {props.selectedStats.map((e)=>{
                if(e.checked){
                    return <li key={e.name}>{e.name} : {props.player.stats[e.name]} </li>
                }
                return null
            }

            )}
          
        </ul>
        <button
            onClick={props.handleRemove}
            > Remove Player </button>
    </div>

Player.propTypes = {
    player : PropTypes.object.isRequired,
    handleRemove : PropTypes.func.isRequired
}

export default Player;