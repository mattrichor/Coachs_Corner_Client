import '../Feed.css'

import React from 'react'
import { useState, useEffect, createRef } from 'react'

const PlayerCard = (props) => {
  return (
    <div className="player-rectangle" onClick={props.onClick}>
      <h3 className="player-name">{props.name}</h3>
      <img className="player-pic" src={props.proPic}></img>
      <p className="player-position">{props.primaryPos}</p>
    </div>
  )
}

export default PlayerCard
