import React from 'react';
import PropTypes from 'prop-types';

const Stat = props =>
    <div className="stat">
        <input 
            type= 'checkbox'
            title= {props.name}
            checked= {props.checked}
            onChange={props.handleToggleChecked}  
        />
        <p>{props.name}</p>
    </div>
Selection.propTypes = {
   leaderBoard : PropTypes.object,
   handleToggleChecked : PropTypes.func.isRequired
}

export default Stat;