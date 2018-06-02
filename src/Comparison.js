import React from 'react';
import PropTypes from 'prop-types';

const Comparison = props =>
    <div className="Comparison">
            <ul>
                <li className="Title"> Leaders </li> 
                {props.stats.map((stat)=>{
                    if(stat.checked && stat.leadPlayer !== "" && stat.score !== ""){
                        return <li key={stat.name}>{stat.name}: {stat.leadPlayer}: {stat.score}</li>
                    }
                    return null
                })}
            </ul>
    </div>

Comparison.propTypes = {
   leaderBoard : PropTypes.object,
}

export default Comparison;