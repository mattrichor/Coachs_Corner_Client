import '../Details.css'

import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const PlayerDetails = ({ player }) => {
  let { playerId } = useParams()

  //   useEffect(() => {
  //     const getPlayerById =
  //   })

  return (
    <div className="player-page">
      <h1 className="player-name">{player.name}</h1>
      <h6 className="player-email">{player.email}</h6>
      <div className="player-info">
        <div className="player-grid">
          <div className="grid-top">
            <h4>Height</h4>
            <h2>{player.height}</h2>
          </div>
          <div className="empty"></div>
          <div className="grid-bottom">
            <h4>Age</h4>
            <h2>{player.age}</h2>
          </div>
        </div>
        <div className="player-grid">
          <div className="grid-top">
            <h4>Weight</h4>
            <h2>{player.weight}</h2>
          </div>
          <div className="empty"></div>
          <div className="grid-bottom">
            <h4>Active</h4>
            {player.isActive != true ? <h2>No</h2> : <h2>Yes</h2>}
          </div>
        </div>
        <div className="player-grid">
          <div className="grid-top">
            <h4>Primary Position</h4>
            <h2>{player.primaryPosition}</h2>
          </div>
          <div className="empty"></div>
          <div className="grid-bottom">
            <h4>Secondary Position</h4>
            <h2>{player.secondaryPosition}</h2>
          </div>
        </div>
      </div>
      <div className="player-skills-and-pic"></div>
    </div>
  )
}

export default PlayerDetails
