import React from 'react';
import PropTypes from 'prop-types';
import Stat from './Stat.js';


const Input = props => 
    <div className="Input-box">
    <form >
        <input
        placeholder="Enter Player Name"
        value={props.pendingPlayer}
        onChange={props.updatePendingPlayer}/>
        <button
            onClick= {props.addPendingPlayer}
            >Add Player
        </button>
    </form>
    <div className='Selection'>
        {props.selectedStats.map((stat, index) =>
            <Stat 
                    key={index}
                    stat={stat}/>
        )}
   </div>
   </div>



Input.propTypes = {
    pendingPlayer: PropTypes.string.isRequired,
    updatePendingPlayer: PropTypes.func.isRequired,
    addPendingPlayer: PropTypes.func.isRequired,
    selectedStats : PropTypes.object.isRequired
}


export default Input;