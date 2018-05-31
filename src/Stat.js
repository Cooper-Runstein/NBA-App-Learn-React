import React from 'react';
import PropTypes from 'prop-types';

const Stat = props =>
    <div className="stat">
        <input 
            type= 'checkbox'
            title= {props.stat.name}
            checked= {props.stat.checked}    
        />
        <p>{props.stat.name}</p>
    </div>
Selection.propTypes = {
   leaderBoard : PropTypes.object,
}

export default Stat;