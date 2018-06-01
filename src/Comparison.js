import React from 'react';
import PropTypes from 'prop-types';

const Comparison = props =>
    <div className="Comparison">
            <ul>
                <li className="Title"> Leaders </li>
                <li>Points Per Game: {props.leaderBoard.PPG[0]} : {props.leaderBoard.PPG[1]}</li>
                <li>Assists Per Game: {props.leaderBoard.APG[0]} : {props.leaderBoard.APG[1]}</li>
                <li>Rebounds Per Game: {props.leaderBoard.RPG[0]} : {props.leaderBoard.RPG[1]}</li>
            </ul>

    </div>

Comparison.propTypes = {
   leaderBoard : PropTypes.object,
}

export default Comparison;