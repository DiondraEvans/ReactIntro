import React from 'react';
import './index.css';
function Player(props) {
    let {whichPlayer} = props;
    return (
        <div className="player-container">
          <h2>Player {whichPlayer} </h2>
          <h3>Wins: </h3>
        </div>
      )
  }

  export default Player;