import React from 'react';
import PropTypes from 'prop-types';

const Input = props => 
    <form>
        <input
        placeholder="Enter Player Name"
        value={props.pendingPlayer}
        onChange={props.updatePendingPlayer}/>
        <button
            onClick={props.addPendingPlayer}
            >Add Player
        </button>
    </form>

Input.propTypes = {
    pendingPlayer: PropTypes.string.isRequired,
    updatePendingPlayer: PropTypes.func.isRequired,
    addPendingPlayer: PropTypes.func.isRequired
}


export default Input;