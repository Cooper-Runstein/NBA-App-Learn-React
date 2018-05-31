import React from 'react';
import PropTypes from 'prop-types';

const Comparison = props =>
    <div className="Comparison">
            <ul>
                <li> Leaders </li>
                <li>Points: {props.leaderBoard.ppg[0]} -{props.leaderBoard.ppg[1]}</li>
                <li>Assists: {props.leaderBoard.apg[0]} -{props.leaderBoard.apg[1]}</li>
                <li>Rebounds: {props.leaderBoard.ppg[0]} -{props.leaderBoard.ppg[1]}</li>
            </ul>

    </div>

Comparison.propTypes = {
   leaderBoard : PropTypes.object,
}

export default Comparison;