import '../Feed.css'

import React from 'react'

const PlayerCard = (props) => {
  return (
    <div className="player-rectangle" onClick={props.onClick}>
      {props.isActive ? (
        <div>
          <h3 className="player-name">{props.name}</h3>
          <img className="player-pic" src={props.proPic}></img>
        </div>
      ) : (
        <div>
          <h3 className="player-name-grayed">{props.name}</h3>
          <img className="player-pic-grayed" src={props.proPic}></img>
        </div>
      )}

      <p className="player-position">{props.primaryPos}</p>
    </div>
  )
}

export default PlayerCard
