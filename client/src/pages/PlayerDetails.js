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
      <h3 className="player-email">{player.email}</h3>
      <div className="player-info">
        <div className="player-grid">
          <div>
            <h4>Height</h4>
            <h2>{player.height}</h2>
          </div>
          <div>
            <h4>Age</h4>
            <h2>{player.age}</h2>
          </div>
        </div>
        <div className="player-grid">
          <div>
            <h4>Weight</h4>
            <h2>{player.weight}</h2>
          </div>
          <div>
            <h4>Active</h4>
            <h2>{player.isActive}</h2>
          </div>
        </div>
        <div className="player-grid">
          <div>
            <h4>Primary Position</h4>
            <h2>{player.primaryPosition}</h2>
          </div>
          <div>
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
